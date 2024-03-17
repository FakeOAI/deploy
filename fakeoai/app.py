from fastapi import FastAPI

from fakeoai.router import register_router
from fakeoai.middleware import register_middleware

class FakeOAPI(FastAPI):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        register_router(self)
        register_middleware(self)