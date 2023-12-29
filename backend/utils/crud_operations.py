from config.db import db
from bson import ObjectId
from utils.encoders import serializeDict, serializeList


def find_all(collection):
    print("find_all function called")
    return serializeList(db.local[collection].find())


def find_one(collection, id):
    print("find_one function called")
    return serializeDict(db.local[collection].find_one({"_id": ObjectId(id)}))


def create(collection, entity):
    print("create function called")
    print(f"Collection: {collection}")
    print(f"Entity to Insert: {entity}")
    db.local[collection].insert_one(dict(entity))
    return serializeList(db.local[collection].find())


def update(collection, id, entity):
    print("update function called")
    db.local[collection].find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(entity)})
    return serializeDict(db.local[collection].find_one({"_id": ObjectId(id)}))


def soft_delete(collection, id):
    print("soft_delete function called")
    db.local[collection].find_one_and_update({"_id": ObjectId(id)}, {"$set": {"deleted": True}})
    return serializeDict(db.local[collection].find_one({"_id": ObjectId(id)}))


def hard_delete(collection, id):
    print("hard_delete function called")
    return serializeDict(db.local[collection].find_one_and_delete({"_id": ObjectId(id)}))
