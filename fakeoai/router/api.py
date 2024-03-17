from fastapi import APIRouter, Request, Depends

from fakeoai.utils.proxy import normal_proxy, sse_proxy
from fakeoai.dependencies import before_api
   
api_router = APIRouter(dependencies=[Depends(before_api)])     
    
all_methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']

@api_router.post("/conversation")
async def conversation_proxy(request: Request):
    return await sse_proxy(request)

@api_router.api_route("/{url:path}", methods=all_methods)
async def api_proxy(request: Request, url: str):
    return await normal_proxy(request)