from sqlalchemy import create_engine, Column, Integer, String, Date, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Replace 'your_database_name.db' with the desired name for your database
DATABASE_URL = 'sqlite:///test.db'

engine = create_engine(DATABASE_URL)
Base = declarative_base()

class Entry(Base):
    __tablename__ = 'entrys'

    id = Column(Integer, primary_key=True)
    team = Column(String)
    title = Column(String)
    date = Column(Date)
    report = Column(Text)
    author = Column(String)

# Create tables
Base.metadata.create_all(bind=engine)

# Initialize database with a default entry
default_entry = Entry(
    team="Default Team",
    title="Default Title",
    date=datetime.date(2024, 1, 15),  # Use the current date
    report="Default Report",
    author="Default Author",
)

# Add the default entry to the session and commit
Session = sessionmaker(bind=engine)
session = Session()

session.add(default_entry)
session.commit()

print("Database initialized successfully with a default entry.")