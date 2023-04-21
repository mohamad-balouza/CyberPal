from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


class OpenvpnFile(Base):
    __tablename__ = "openvpn_files"

    id = Column(Integer, primary_key=True, index=True)
    file_url = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"))

    user_that_uploaded = relationship("User", back_populates="uploaded_file")

