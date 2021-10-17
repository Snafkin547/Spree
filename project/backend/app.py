import json

import mysql.connector
from flask import Flask, request

from search.searchInput import searchInput

# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__)

#app is the instance of Flask app 
@app.route("/")
def home():
    return "Hello!"  

# api address
apiPrefix = '/api/v1'

# database connector
mydb = mysql.connector.connect(
  host='localhost',
  user='root',
  password='',
  database='CRUDDatabase',
  #auth_plugin='mysql_native_password',
  port=3306
)
mycur = mydb.cursor()

# the function of search bar
@app.route(apiPrefix + '/searchBar', methods=['POST'])
def searchBar():
    keyword = request.get_data(as_text=True)
    print('get ' + keyword)
    res = {
        'message': searchInput(keyword[1:-1], mycur)
    }
    return json.dumps(res)

if __name__ == '__main__':
    app.run(debug=True)
