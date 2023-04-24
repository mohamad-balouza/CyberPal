from app.crud.base import CrudBase
from app.models.used_flag import UsedFlag
from app.schemas.used_flag import UsedFlagCreate, UsedFlagUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudUsedFlag(CrudBase[UsedFlag, UsedFlagCreate, UsedFlagUpdate]):
    def createWithAuthor(self, db: Session, *, obj_in: UsedFlagCreate, user_id: int) -> UsedFlag:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, user_id=user_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj



used_flag = CrudUsedFlag(UsedFlag)