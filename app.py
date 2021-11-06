import json

import mysql.connector
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.account.register import register as reg
from project.backend.account.findUser import findUserByMailbox

# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__, static_folder="project/frontend/build", static_url_path='')
cors = CORS(app)


# app is the instance of Flask app
@app.route("/")
@cross_origin()
def home():
    return send_from_directory(app.static_folder, 'index.html')


# api address
apiPrefix = '/api/v1'
# database connector
mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='chipspree',
)
mycur = mydb.cursor()


# the function of search bar
@app.route(apiPrefix + '/searchBar', methods=['POST'])
@cross_origin()
def searchBar():
    keyword = request.get_data(as_text=True)
    print('get ' + keyword)
    res = {
        'message': searchInput(keyword[1:-1], mycur)
    }
    return json.dumps(res)


# the function of register
@app.route(apiPrefix + '/register', methods=['POST'])
@cross_origin()
def register():
    info = json.loads(request.get_data())
    flag = reg(info, mycur)
    mydb.commit()
    return '1'


# the function of find user by mailbox
@app.route(apiPrefix + '/findUserByMailbox', methods=['POST'])
@cross_origin()
def checkMailbox():
    mailbox = json.loads(request.get_data())['mailBox']
    user = findUserByMailbox(mailbox, mycur)
    return '1' if user else '0'


if __name__ == '__main__':
    app.run(debug=True)
