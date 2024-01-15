from flask_marshmallow import Schema
from marshmallow.fields import Integer, Date, String
from api.model.entry import Entry

class EntrySchema(Schema):
    id = Integer(dump_only=True)
    team = String(required=True)
    title = String(required=True)
    date = Date(format='%Y-%m-%d', required=True, error_messages={'invalid': 'Invalid date format'})
    report = String(required=True)
    author = String(required=True)
