from importlib import reload
from urllib import request
from flask import Flask
from flask import request
import pymongo
from pymongo.server_api import ServerApi
from flask_cors import CORS
import json
import hashlib
from flask import jsonify


app = Flask(__name__)
CORS(app)
conn_str = "mongodb+srv://54k:vivisavi@cluster0.javoxwy.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn_str, server_api=ServerApi('1'))

try:
    print(client.server_info())
except Exception:
    print("Unable to connect to the server.")

@app.route('/')
def home():
    return f'{client.server_info()}'

@app.route('/createnewuser', methods=['POST'])
def createnewuser():

    request_data = json.loads(request.get_data())
    hash = hashlib.sha256(request_data['password'].encode('utf-8')).hexdigest()
    doc = {'name': request_data['name'], 'email': request_data['email'], 'password': hash}
    print(doc)

    db = client.users
    auth_db = db.auth
    res = str(auth_db.insert_one(doc))
    data = {"res":res}

    return jsonify(data),200

if __name__ == '__main__':
    app.run(debug=True)