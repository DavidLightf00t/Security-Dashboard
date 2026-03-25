from fastapi import FastAPI 
from database import prisma, connect, disconnect 
from contextlib import asynccontextmanager
from datetime import datetime

@asynccontextmanager 
async def lifespan(app: FastAPI):
    await prisma.connect()
    yield
    await prisma.disconnect()

app = FastAPI(lifespan=lifespan)

@app.get("/api/users")
async def get_users():
    users = await prisma.user.find_many()

@app.get("/api/users/{user_id}")
async def get_user(user_id: str):
    user = await prisma.user.find_unique(where={"id": user_id})
    return user

@app.post("/api/users")
async def create_user(
    id: str,
    name: str,
    nickname: str,
    given_name: str,
    family_name: str,
    picture: str,
    email: str,
    org_id: str,
):
    user = await prisma.user.create(
        data={
            "id": id,
            "name": name,
            "nickname": nickname,
            "given_name": given_name,
            "family_name": family_name,
            "picture": picture,
            "email": email,
            "org_id": org_id,
        }
    )
    return user

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
