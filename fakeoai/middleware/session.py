import json
from base64 import b64decode, b64encode
from uuid import uuid4

from itsdangerous.exc import BadTimeSignature, SignatureExpired
from starlette.datastructures import MutableHeaders
from starlette.requests import HTTPConnection
from starlette.types import Message, Receive, Scope, Send
from starlette_session.backends import BackendType
from starlette_session import SessionMiddleware

class SessionMiddleware(SessionMiddleware):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
    
    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] not in ("http", "websocket"):
            await self.app(scope, receive, send)
            return
        
        connection = HTTPConnection(scope)
        initial_session_was_empty = True

        if self.cookie_name in connection.cookies:
            data = connection.cookies[self.cookie_name].encode("utf-8")
            try:
                data = self.signer.unsign(data, max_age=self.max_age)
                if self.backend_type == BackendType.cookie or not self.session_backend:
                    scope["session"] = json.loads(b64decode(data))
                else:
                    session_key = json.loads(b64decode(data)).get(
                        self._cookie_session_id_field
                    )
                    scope["session"] = await self.session_backend.get(session_key)
                    scope["__session_key"] = session_key

                initial_session_was_empty = False
            except (BadTimeSignature, SignatureExpired, Exception):
                scope["session"] = {}
        else:
            scope["session"] = {}

        async def send_wrapper(message: Message, **kwargs) -> None:
            if message["type"] == "http.response.start":

                session_key = scope.pop("__session_key", str(uuid4()))
                max_age = scope['state'].get('max_age', self.max_age)

                if scope["session"] and scope['state'].get('permanent'):
                    if (
                        self.backend_type == BackendType.cookie
                        or not self.session_backend
                    ):
                        cookie_data = scope["session"]
                    else:
                        await self.session_backend.set(
                            session_key, scope["session"], self.max_age
                        )
                        cookie_data = {self._cookie_session_id_field: session_key}

                    data = b64encode(json.dumps(cookie_data).encode("utf-8"))
                    data = self.signer.sign(data)

                    headers = MutableHeaders(scope=message)
                    header_value = self.__construct_cookie(clear=False, data=data, max_age=max_age)
                    headers.append("Set-Cookie", header_value)

                elif not scope["session"] and not initial_session_was_empty:

                    if self.session_backend and self.backend_type != BackendType.cookie:
                        await self.session_backend.delete(session_key)

                    headers = MutableHeaders(scope=message)
                    header_value = self.__construct_cookie(clear=True)
                    headers.append("Set-Cookie", header_value)

            await send(message)

        await self.app(scope, receive, send_wrapper)

    def __construct_cookie(self, clear: bool = False, data=None, max_age=None) -> str:
        if clear:
            cookie = f"{self.cookie_name}=null; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; {self.security_flags}"
        else:
            cookie = f"{self.cookie_name}={data.decode('utf-8')}; Path=/; Max-Age={max_age}; {self.security_flags}"
        if self.domain:
            cookie = f"{cookie}; Domain={self.domain}"
        return cookie