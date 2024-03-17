from fastapi import FastAPI, Request, Response

from fakeoai.settings import c

import traceback

def register_middleware(app: FastAPI):
    from .session import SessionMiddleware

    app.middleware_stack = None

    app.add_middleware(
        SessionMiddleware,
        secret_key=c.secret_key,
        cookie_name=f'{f"__Secure-" if c.secure else ""}{c.cookie_name}',
        https_only=c.secure,
    )

    @app.middleware("http")
    async def handle_before_and_after_request(request: Request, call_next):
        try:
            response: Response = await call_next(request)
            response.headers["X-Server"] = c.manager
            return response
        except Exception as e:
            traceback.print_tb(e.__traceback__)
            return handle_exception(request, e)

    app.build_middleware_stack()

def handle_exception(request: Request, e: Exception):
    from fastapi.responses import JSONResponse
    from fastapi.encoders import jsonable_encoder
    from aiohttp import ClientError

    detail = vars(e).get('detail', str(e) or 'unknown error')
    if isinstance(e, ClientError):
        detail = 'network error'
    return JSONResponse(jsonable_encoder({'detail':detail}), vars(e).get('status_code', 500), {'X-Server': c.manager})