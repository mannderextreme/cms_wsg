from app import db


class User(db.Model):
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    date_created = db.Column(db.DateTime, auto_now_add=True)

    def __init__(self, email, password):
        self.email = email
        self.password = password
