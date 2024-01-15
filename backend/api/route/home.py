from http import HTTPStatus
from flask import Blueprint
from flasgger import swag_from


home_api = Blueprint('api', __name__)


@home_api.post('/blogpost')
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'Post a blogentry',
            'schema': WelcomeSchema
        }
    }
})
def welcome():
    """
    1 liner about the route
    A more detailed description of the endpoint
    ---
    """
    result = WelcomeModel()
    return WelcomeSchema().dump(result), 200


