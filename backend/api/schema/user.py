from app import ma
from model import User

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
