import json
import sys
from types import MethodType
import mysql.connector
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.checkout.checkoutInput import insertCheckoutInfoToDB
from project.backend.account.register import register as reg
from project.backend.account.login import loginByMailBox
from project.backend.account.findUser import findUserByMailbox
from project.backend.product.product import pickItem
from project.backend.myAccountPage.orderHistory import pickOrderItem
from project.backend.myAccountPage.userInfo import findUserInfo

from project.backend.cart.cart import pickCart
from project.backend.cart.addToCart import addToCart
from project.backend.cart.removeFromCart import removeFromCart

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

# the function of search bar
@app.route(apiPrefix + '/searchBar', methods=['POST'])
@cross_origin()
def searchBar():
    keyword = request.get_data(as_text=True)
    print('get ' + keyword)
    res = {
        'message': searchInput(keyword[1:-1])
    }
    return json.dumps(res)

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

@app.route(apiPrefix+ '/item', methods=['GET'])
@cross_origin()
def getItem():
    product=pickItem()
    return json.dumps(product)

@app.route(apiPrefix+ '/getItems', methods=['GET'])
@cross_origin()
def getOrderItem():
    user_id = request.args.get('user_id')
    orderItem=pickOrderItem(user_id)
    return json.dumps(orderItem)

@app.route(apiPrefix+ '/getUserInfo', methods=['GET'])
@cross_origin()
def getUserInfo():
    user_id = request.args.get('user_id')
    userInformation=findUserInfo(user_id)
    print(userInformation, file=sys.stderr)
    return json.dumps(userInformation)

@app.route(apiPrefix + '/cart', methods = ['GET'])
@cross_origin()
def getCart():
    cart_item = pickCart()
    return json.dumps(cart_item)

@app.route(apiPrefix + '/addToCart', methods=['POST'])
@cross_origin()
def addCart():
    addToCart(request.get_data(as_text=True))
    return "1"

@app.route(apiPrefix + '/removeFromCart', methods=['POST'])
@cross_origin()
def removeCart():
    removeList = json.loads(request.get_data())
    removeFromCart(removeList)
    return "1"
     
# the function of checkout
@app.route(apiPrefix + '/checkout', methods=['POST'])
@cross_origin()
def checkout():
    infoJsonObject = json.loads(request.get_data())
    print("in app.py backend info, data posted from checkout form: ", infoJsonObject)
    res = {
        'status': insertCheckoutInfoToDB(infoJsonObject)
    }
    return json.dumps(res)
    
if __name__ == '__main__':
    app.run(debug=True)