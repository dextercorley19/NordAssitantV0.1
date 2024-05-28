from contextlib import asynccontextmanager
import uvicorn
from fastapi import FastAPI
from db import test_pool, pool


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await pool.open()
        yield
    finally:
        await pool.close()


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def test_db():
    results = await test_pool()
    return results


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
