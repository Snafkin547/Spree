import json
import mysql.connector
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.account.register import register as reg
from project.backend.product.product import pickItem
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

if __name__ == '__main__':
    app.run(debug=True)
