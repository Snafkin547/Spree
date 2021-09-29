from flask import Flask

# creates an instance of Flask app and pass it to the variable app
app = Flask(__name__)

#app is the instance of Flask app 
@app.route("/<string:name>")
def home(name):
    return f"<h1>Hello, {name}!</h1>"    

if __name__ == '__main__':
    app.run(debug=True)