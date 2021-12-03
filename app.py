import json
from types import MethodType
import mysql.connector
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.account.register import register as reg
from project.backend.product.product import pickItem
from project.backend.cart.cart import pickCart
from project.backend.cart.addToCart import addToCart
from project.backend.cart.removeFromCart import removeFromCart
# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__, static_folder="project/frontend/build", static_url_path='')
cors=CORS(app)
#app is the instance of Flask app 
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
    flag = register(info)
    return '1'

@app.route(apiPrefix+ '/item', methods=['GET'])
@cross_origin()
def getItem():
    product=pickItem()
    return json.dumps(product)

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

if __name__ == '__main__':
    app.run(debug=True)
