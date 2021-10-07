from flask import Flask

# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__)

#app is the instance of Flask app 
@app.route("/")
def home():
    return "Hello!"    

if __name__ == '__main__':
    app.run(debug=True)