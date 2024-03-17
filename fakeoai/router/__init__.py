from fastapi import FastAPI, Request

from fastapi.staticfiles import StaticFiles
from fakeoai.settings import c

from .template import template_router
from .api import api_router

def register_router(app: FastAPI):
    if c.webui:
        app.include_router(api_router, prefix="/backend-api")
        app.include_router(api_router, prefix="/public-api")
        
        @app.get('/api/auth/session')
        async def auth_session(request: Request):
            return { key: value for key, value in request.session.items()}
            
        app.mount("/_next/static", StaticFiles(directory='static'), name="static")
        app.include_router(template_router)
    else:
        app.include_router(api_router)
