from app.crud.base import CrudBase
from app.models.flag import Flag
from app.schemas.flag import FlagCreate, FlagUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudFlag(CrudBase[Flag, FlagCreate, FlagUpdate]):
    def getMultipleByToolId(self, db: Session, *, tool_id: int, skip: int = 0, limit: int = 100) -> List[Flag]:
        return db.query(self.model).filter(Flag.tool_id == tool_id).offset(skip).limit(limit).all()



flag = CrudFlag(Flag)