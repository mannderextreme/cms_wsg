from flask import Flask
from flasgger import Swagger
from api.route.entry import entry_api
from flask_cors import CORS

from api.model.base import Base, init_db
import os

def create_app():
    app = Flask(__name__) 
    app.config.from_pyfile('config.py')
    
    app.config['SWAGGER'] = {
        'title': 'Flask API Starter Kit',
    }
    swagger = Swagger(app)
    CORS(app)
     ## Initialize Config
    app.config.from_pyfile('config.py')
    app.register_blueprint(entry_api)

    return app


if __name__ == '__main__':
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()
    port = args.port

    app = create_app()

    app.run(host='0.0.0.0', port=port)

