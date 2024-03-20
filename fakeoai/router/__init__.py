from fastapi import FastAPI

from fastapi.staticfiles import StaticFiles

from .template import template_router
from .api import api_router

def register_router(app: FastAPI):
    app.include_router(api_router, prefix="/backend-api")
    app.include_router(api_router, prefix="/public-api")        
    app.mount("/_next/static", StaticFiles(directory='static'), name="static")
    app.include_router(template_router)
