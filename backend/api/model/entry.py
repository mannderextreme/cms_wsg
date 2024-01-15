from api.model.base import db_session as db
import sqlalchemy as sa
from api.model.base import Base


class Entry(Base):
    __tablename__ = "entrys"
    id = sa.Column(sa.Integer, primary_key=True)
    team = sa.Column(sa.String(20))
    title = sa.Column(sa.String(100))
    date = sa.Column(sa.Date)
    report = sa.Column(sa.String(1000))
    author = sa.Column(sa.String(100))
    

    def __init__(self, id, team, title, date, report, author):
        self.id = id
        self.team = team
        self.title = title
        self.date = date
        self.report = report
        self.author = author