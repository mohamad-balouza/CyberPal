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
    
    def getMultipleByAuthor(self, db: Session, *, user_id: int, skip: int = 0, limit: int = 100) -> List[UsedFlag]:
        return db.query(self.model).filter(UsedFlag.user_id == user_id).offset(skip).limit(limit).all()



used_flag = CrudUsedFlag(UsedFlag)