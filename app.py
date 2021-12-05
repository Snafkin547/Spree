import json
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.account.register import register as reg
from project.backend.account.login import loginByMailBox
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

# the function of register
@app.route(apiPrefix + '/register', methods=['POST'])
@cross_origin()
def register():
    info = json.loads(request.get_data())
    flag = reg(info)
    return '1'

# the function of check mailbox
@app.route(apiPrefix + '/findUserByMailbox', methods=['POST'])
@cross_origin()
def checkMailbox():
    mailbox = json.loads(request.get_data())['mailBox']
    user = findUserByMailbox(mailbox)
    return '1' if user else '0'

# the function of login
@app.route(apiPrefix + '/login', methods=['POST'])
@cross_origin()
def login():
    info = json.loads(request.get_data())
    flag = loginByMailBox(info)
    return flag  # 1:successes login 0:invalid password -1:user not exist

if __name__ == '__main__':
    app.run(debug=True)
