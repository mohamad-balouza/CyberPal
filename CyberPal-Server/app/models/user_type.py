from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from typing import TYPE_CHECKING

from app.database.database import Base


class UserType(Base):
    __tablename__ = "user_types"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String, nullable=False, index=True)

    user = relationship("User", back_populates="user_type")