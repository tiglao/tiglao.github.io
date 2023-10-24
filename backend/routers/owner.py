from fastapi import APIRouter

from models.owner import Owner
from config.db import db
from utils.encoders import serializeDict, serializeList
from bson import ObjectId

owner = APIRouter()


@owner.get("/")
async def find_all_owners():
    return serializeList(db.local.owner.find())


@owner.get("/{id}")
async def find_one_owner(id):
    return serializeDict(db.local.owner.find_one({"_id": ObjectId(id)}))


@owner.post("/")
async def create_owner(owner: Owner):
    db.local.owner.insert_one(dict(owner))
    return serializeList(db.local.owner.find())


@owner.put("/{id}")
async def update_owner(id, owner: Owner):
    db.local.owner.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(owner)})
    return serializeDict(db.local.owner.find_one({"_id": ObjectId(id)}))


@owner.delete("/{id}")
async def delete_owner(id, owner: Owner):
    return serializeDict(db.local.owner.find_one_and_delete({"_id": ObjectId(id)}))
