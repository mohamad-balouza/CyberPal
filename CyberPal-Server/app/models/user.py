from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base

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