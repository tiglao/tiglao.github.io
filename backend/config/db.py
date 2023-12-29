from pymongo import MongoClient
import os

MONGO_USERNAME = os.getenv("MONGO_INITDB_ROOT_USERNAME")
MONGO_PASSWORD = os.getenv("MONGO_INITDB_ROOT_PASSWORD")
DATABASE_NAME = os.getenv("DATABASE_NAME")
MONGO_CONNECTION_STRING = f"mongodb://{MONGO_USERNAME}:{MONGO_PASSWORD}@mongodb:27017/"

client = MongoClient(MONGO_CONNECTION_STRING)

db = client[DATABASE_NAME]
