from http import HTTPStatus
from flask import Blueprint
from flasgger import swag_from

user_api = Blueprint('user', __name__)

