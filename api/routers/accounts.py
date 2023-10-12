from fastapi import APIRouter
from models.accounts import Item


router = APIRouter()

@router.get("/")
def read_root():
    print("GET request received at /")
    return {"message": "Hello from FastAPI"}

@router.post("/items/")
def create_item(item: Item):
    print(f"Received item: {item}")
    return {"item": item}
