from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base
from app.models.favorite_script import Favorite_script

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)
    user_type_id = Column(Integer, ForeignKey("user_types.id"), index=True, default="Beginner")

    user_type = relationship("User_type", back_populates="user")
    flags_used_by_user = relationship("Used_flag", back_populates="user_that_used")
    uploaded_file = relationship("Openvpn_file", back_populates="user_that_uploaded")
    schedules = relationship("Schedule", back_populates="user_schedule")
    scripts = relationship("Script", back_populates="author")
    favorited_scripts = relationship("Script", secondary=Favorite_script, back_populates="user_who_favorited")