from fastapi import Request

from fakeoai.settings import c

filterHeader = ['host', 'origin', 'cookie', 'connection', 'referer', 'content-length', 'user-Agent', 'accept-encoding']

async def before_api(request: Request):  
    headers = { key: value for key, value in request.headers.items() if key.lower() not in filterHeader }
    headers['x-license'] = c.license
    request.state.headers = headers
    request.state.method = request.method
    request.state.target = c.api_proxy
    request.state.path = request.url.path