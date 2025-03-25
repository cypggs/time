FROM python:3.9-slim
WORKDIR /app
COPY . .
EXPOSE 59843
CMD ["python", "-m", "http.server", "59843", "--directory", "/app"]