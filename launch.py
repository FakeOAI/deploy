from fakeoai import FakeOAPI

import uvicorn

app = FakeOAPI()

if __name__ == '__main__':
    uvicorn.run(app)