from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class UsedFlag(Base):
    __tablename__ = "used_flags"

    flag_contents = Column(String)
    flag_id = Column(Integer, ForeignKey("flags.id"), primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)

    user_that_used = relationship("User", back_populates="flags_used_by_user")
    flag_that_was_used = relationship("Flag", back_populates="which_user_used")