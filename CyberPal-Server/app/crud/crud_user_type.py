from app.crud.base import CrudBase
from app.models.user_type import UserType
from app.schemas.user_type import UserTypeCreate, UserTypeUpdate

class CrudUserType(CrudBase[UserType, UserTypeCreate, UserTypeUpdate]):
    pass


user_type = CrudUserType(UserType)