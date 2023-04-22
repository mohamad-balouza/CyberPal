from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from typing import TYPE_CHECKING

from app.database.database import Base
from app.models.favorite_script import FavoriteScript

if TYPE_CHECKING:
    from app.schemas.user_type import UserType
    from app.schemas.used_flag import UsedFlag
    from app.schemas.openvpn_file import OpenvpnFile
    from app.schemas.schedule import Schedule
    from app.schemas.script import Script

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)
    user_type_id = Column(Integer, ForeignKey("user_types.id"), index=True, default=1)

    user_type = relationship("UserType", back_populates="user")
    flags_used_by_user = relationship("UsedFlag", back_populates="user_that_used")
    uploaded_file = relationship("OpenvpnFile", back_populates="user_that_uploaded")
    schedules = relationship("Schedule", back_populates="user_schedule")
    scripts = relationship("Script", back_populates="author")
    favorited_scripts = relationship("Script", secondary=FavoriteScript, back_populates="user_who_favorited")