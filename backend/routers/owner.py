from fastapi import APIRouter
from models.owner import Owner
from utils.crud_operations import find_all, find_one, create, update, soft_delete, hard_delete

router = APIRouter()

@router.get("/")
async def find_all_owners():
    return find_all("owner")

@router.get("/{id}")
async def find_one_owner(id):
    return find_one("owner", id)

@router.post("/")
async def create_owner(owner: Owner):
    print(f"Owner Data: {owner}")
    return create("owner", owner)

@router.put("/{id}")
async def update_owner(id, owner: Owner):
    return update("owner", id, owner)

@router.delete("/soft/{id}")
async def soft_delete_owner(id):
    return soft_delete("owner", id)

@router.delete("/hard/{id}")
async def hard_delete_owner(id):
    return hard_delete("owner", id)
