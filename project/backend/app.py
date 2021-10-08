from flask import Flask, request
import json
from search.searchInput import searchInput

# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__)

#app is the instance of Flask app 
@app.route("/")
def home():
    return "Hello!"  

# api address
apiPrefix = '/api/v1'

# the function of search bar
@app.route(apiPrefix + '/searchBar', methods=['POST'])
def searchBar():
    keyword = request.get_data(as_text=True)
    print('get ' + keyword)
    res = {
        'message': searchInput(keyword)
    }
    return json.dumps(res)

if __name__ == '__main__':
    app.run(debug=True)