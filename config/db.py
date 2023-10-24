from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_USERNAME = os.getenv("MONGO_INITDB_ROOT_USERNAME")
MONGO_PASSWORD = os.getenv("MONGO_INITDB_ROOT_PASSWORD")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = MongoClient(f"mongodb://{MONGO_USERNAME}:{MONGO_PASSWORD}@mongodb:27017/{DATABASE_NAME}")

db = client[DATABASE_NAME]
