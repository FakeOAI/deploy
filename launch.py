from fakeoai import FakeOAPI, c

from contextlib import asynccontextmanager

import uvicorn
import aiohttp
import sys
import json
import logging

logging.basicConfig(level=logging.INFO)

@asynccontextmanager
async def lifespan(_):
    async with aiohttp.ClientSession() as client:
        res = await client.get(f'{c.api_proxy}/license/info/{c.license}')
        json_data = json.loads(await res.content.read())
        if res.ok:
            logging.info("=========================================")
            logging.info(f"  欢迎使用【FakeOAI】~~~")
            logging.info(f"  凭证剩余额度: {json_data['usage']}")
            logging.info(f"  凭证授权的IP: {json_data['authorize_ip']}")
            logging.info("=========================================")
        else:
            sys.exit(f"启动错误❌: {json_data['detail']}")
    yield
    logging.info("========== Goodbye~~ ==========")

app = FakeOAPI(lifespan=lifespan)

if __name__ == '__main__':
    uvicorn.run(app)