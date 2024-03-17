from threading import Event, Thread
from fastapi import Request
from queue import Queue
from aiohttp import ClientResponse

import aiohttp
import json
import asyncio

class SseProcesser:
    
    @classmethod
    async def __process_sse_except(cls, resp: ClientResponse):
        result = b''
        async for line in resp.content:
            result += line
        return result
    
    @classmethod   
    async def __process_sse(cls, resp: ClientResponse):
        media_type = resp.headers.get('content-type')
        is_response_stream = media_type and 'text/event-stream' in media_type
        yield resp.status
        yield media_type

        if resp.status != 200 or not is_response_stream:
            yield await cls.__process_sse_except(resp)
            return

        async for utf8_line in resp.content:
            if b'data: [DONE]' == utf8_line[0:12]:
                break

            if b'data: {' == utf8_line[0:7]:
                yield json.loads(utf8_line[6:])
      
    @classmethod
    async def __do_request_sse(cls, request: Request, data, queue, event):
        try:
            async with aiohttp.ClientSession() as client:
                    
                query_string = f"?{request.url.query}" if request.url.query else ""
                target_url = f'{request.state.target}{request.state.path}{query_string}'

                async with client.request(request.state.method, target_url, data=data, headers=request.state.headers, 
                    timeout=60*10, cookies=request.cookies) as res:

                    async for line in cls.__process_sse(res):
                        queue.put(line)

                        if event.is_set():
                            break

                queue.put(None)
        except Exception as e:
            queue.put(e)

    @classmethod
    def __generate_wrap(cls, queue: Queue, thread: Thread, event: Event):
        while True:
            try:
                item = queue.get()
                if isinstance(item, Exception):
                    raise item

                if item is None:
                    break

                yield item
            except BaseException as e:
                event.set()
                thread.join()
                
                if isinstance(e, GeneratorExit):
                    raise e
            
    @classmethod
    def request_sse(cls, request: Request, data):
        queue, e = Queue(), Event()
        t = Thread(target=asyncio.run, args=(cls.__do_request_sse(request, data, queue, e),))
        t.start()

        return queue.get(), queue.get(), cls.__generate_wrap(queue, t, e)
    
    @classmethod
    async def wrap_stream_out(cls, generator):

        for line in generator:
            yield b'data: ' + json.dumps(line).encode('utf-8') + b'\n\n'

        yield b'data: [DONE]\n\n'
