from http import HTTPStatus
from flask import Blueprint, Response, request, jsonify
from flasgger import swag_from
from api.model.entry import Entry
from api.schema.entry import EntrySchema
from api.model.base import Base, db_session

entry_api = Blueprint('entry', __name__)

@entry_api.post('/')
def create_entry():
    schema = EntrySchema()
    data = schema.load(request.get_json())
    entry = Entry(team=data["team"], title=data["title"], date=data["date"], report=data["report"], author=data["author"])
    db_session.add(entry)  # Use 'entry' instead of 'data' here

    try:
        db_session.commit()
        return Response(status=201)
    except Exception as e:
        db_session.rollback()
        return Response(status=500)
    finally:
        db_session.close()

@entry_api.get('/latest')
def return_blogpost():
    latest_entries = db_session.query(Entry).order_by(Entry.date.desc()).limit(10).all()
    print(latest_entries)

    if latest_entries:
        entry_schema = EntrySchema(many=True)
        result = entry_schema.dump(latest_entries)
        return jsonify(result), HTTPStatus.OK
    else:
       return Response(status=404, response="No entries found")
    
@entry_api.get('/')
def return_blah():
    print("landed here")
    #db_result = db_session.get(Entry, id)
    return Response({"message": "This is a Message"}, status=200)

