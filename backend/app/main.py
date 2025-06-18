from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/api/message")
def get_message():
    return {"message": "Hello from Backend!"}
