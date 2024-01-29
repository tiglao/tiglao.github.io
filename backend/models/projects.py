from pydantic import BaseModel, Field, EmailStr


class Project(BaseModel):
    name: str = Field(..., example="Tamal Sen", min_length=1, max_length=100)
    categories: #list of categories
    images: #list of images
