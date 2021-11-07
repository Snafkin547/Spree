import json

import mysql.connector
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from project.backend.search.searchInput import searchInput
from project.backend.account.register import register as reg

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
# database connector
# mydb = mysql.connector.connect(
#   host='us-cdbr-east-04.cleardb.com',
#   user='b1c819ea406612',
#   password='35195fc1',
#   database='heroku_993345239501248',
# )
# mycur = mydb.cursor(buffered=True)

from mysql.connector import pooling
mydb =  pooling.MySQLConnectionPool(
    pool_name="pynative_pool",
    pool_size=3,
    pool_reset_session=True,
    host='us-cdbr-east-04.cleardb.com',
    user='b1c819ea406612',
    password='35195fc1',
    database='heroku_993345239501248',
)

mycur = mydb.get_connection().get_server_info().cursor(buffered=True)

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

if __name__ == '__main__':
    app.run(debug=True)
