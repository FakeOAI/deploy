FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "-w", "5", "--threads", "8", "-b", "0.0.0.0:8000", "-k", "uvicorn.workers.UvicornWorker", "launch:app"]