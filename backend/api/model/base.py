from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship, backref
import sqlalchemy as sa

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine("sqlite:///D:/Projekte/Websites/WSG/cms_wsg/backend/test.db")
db_session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)

Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    from api.model.entry import Entry

    Base.metadata.create_all(bind=engine)
    # Create a default entry (if needed)
    default_entry = Entry(
        team="Default Team",
        title="Default Title",
        date="2024-01-15",  # Add a valid date
        report="Default Report",
        author="Default Author",
    )

    # Add the default entry to the session and commit
    db_session.add(default_entry)
    db_session.commit()


