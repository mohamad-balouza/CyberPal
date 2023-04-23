from app.crud.base import CrudBase
from app.models.openvpn_file import OpenvpnFile
from app.schemas.openvpn_file import OpenvpnFileCreate, OpenvpnFileUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudOpenvpnFile(CrudBase[OpenvpnFile, OpenvpnFileCreate, OpenvpnFileUpdate]):
    def createWithAuthor(self, db: Session, *, obj_in: OpenvpnFileCreate, user_id: int) -> OpenvpnFile:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, user_id=user_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def getMultipleByAuthor(self, db: Session, *, user_id: int, skip: int = 0, limit: int = 100) -> List[OpenvpnFile]:
        return db.query(self.model).filter(OpenvpnFile.user_id == user_id).offset(skip).limit(limit).all()



openvpn_file = CrudOpenvpnFile(OpenvpnFile)