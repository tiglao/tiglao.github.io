from pydantic import BaseModel, Field, EmailStr


class Owner(BaseModel):
    name: str = Field(..., example="Ellie", description="The name of the owner", min_length=1, max_length=100)
    email: EmailStr = Field(..., example="hello@ellietiglao.com", description="The email address of the owner")
    password: str = Field(..., example="thisisthesongthatneverends", description="The password for the owner", min_length=8, max_length=100)
