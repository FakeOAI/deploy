from gunicorn.app.base import BaseApplication
from gunicorn.app.base import Config

from fakeoai import FakeOAPI, c

import logging
import aiohttp
import sys
import asyncio
import json

logging.basicConfig(level=logging.INFO)

class FastAPIApplication(BaseApplication):
    def __init__(self, app, options=None):
        self.options = options or {}
        self.application = app
        super().__init__()

    def load_config(self):
        config = {key: value for key, value in self.options.items()
                  if key in self.cfg.settings and value is not None}
        for key, value in config.items():
            self.cfg.set(key.lower(), value)

    def load(self):
        return self.application
    
async def check_license():
    async with aiohttp.ClientSession() as client:
        res = await client.get(f'{c.api_proxy}/license/info/{c.license}')
        json_data = json.loads(await res.content.read())
        if res.ok:
            logging.info("=========================================")
            logging.info(f"  欢迎使用【FakeOAI】~~~")
            logging.info(f"  凭证剩余额度: {json_data['usage']}")
            logging.info(f"  凭证授权的IP: {json_data['authorize_ip']}")
            logging.info(f"  当前模式: {'WEB' if c.webui else 'API'}")
            logging.info("=========================================")
            return c.license
        else:
            sys.exit(f"启动错误❌: {json_data['detail']}")

async def main():
    config = Config()
    parser = config.parser()
    args, _ = parser.parse_known_args()
    options = args.__dict__
    options.update({'worker_class': 'uvicorn.workers.UvicornWorker'})
    await check_license()
    app = FakeOAPI()
    FastAPIApplication(app, options).run()

if __name__ == "__main__":
    asyncio.run(main())