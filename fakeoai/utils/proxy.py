from fastapi import Request, Response
from fastapi.responses import StreamingResponse

from fakeoai.utils.sse import SseProcesser

import aiohttp

async def normal_proxy(request: Request, path=None):

    query_string = f"?{request.url.query}" if request.url.query else ""
    path = path or f'{request.state.path}{query_string}'
    target_url = f'{request.state.target}{path}'

    async with aiohttp.ClientSession() as s:

        res = await s.request(request.method, target_url, headers=request.state.headers, timeout=60*10,
            data=await request.body(), cookies=request.cookies) 
        media_type = res.headers.get('content-type')

        return Response(await res.content.read(), res.status, media_type=media_type)
    
async def sse_proxy(request: Request):
    
    status_code, media_type, generator = SseProcesser.request_sse(request, await request.body())

    if 'text/event-stream' in media_type:
        return StreamingResponse(SseProcesser.wrap_stream_out(generator), status_code, media_type=media_type)
    else:
        return Response(next(generator), status_code, media_type=media_type)