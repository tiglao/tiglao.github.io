from pydantic import BaseModel, Field


class Owner(BaseModel):
    name: str = Field(..., example="ellie")
    email: str = Field(..., example="hello@ellietiglao.com")
    password: str = Field(..., example="thisisthesongthatneverends")
