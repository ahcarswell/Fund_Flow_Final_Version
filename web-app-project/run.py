from flask import Flask
from api_call import api_call
from accounts import accounts

# run.py

# from app import app

app = Flask(__name__)

app.register_blueprint(api_call)
app.register_blueprint(accounts)

if __name__ == '__main__':
    app.run()
