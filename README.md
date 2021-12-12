# Start with Chip-Spree WebApp

Backend - Flask setup
1. Create a virtual environment - to install all dependencies we will need for the application
2. In Windows type command > python -m venv venv  > to create a virtual environment named venv
3. Activate virtual environment  on windows by typeing the  command > venv\Scripts\activate.bat
4. Open the Command Pallet (short cut ctl+shift+P) and select Python Interpreter > Python + version + virtual environment
5. Install Flask by using command > pip install Flask
6. Use command > pip list > to confirm Flask is installed
7. Create application file on Windows by using the command > type nul >> "app.py" > to create the app runner
8. Start the app by creating a Minimal Application
   from flask import Flask 
   app = Flask(__name__) 
   @app.route("/") 
   def home(): 
        return "Hello, Flask!"
9. Run the Flask app by typing the command > python app.py
If the .py file has other name than app.py you will have to set up an environmental variable with the name of the file (e.g. $env:FLASK_APP="server.py")
What the command is doing is calling the app.run function
10. On Production debug should be false. You can access the endpoint by following the link provided in the terminal. Flask is running on port 5000
11. Change Environment from production to dev >  $env:FLASK_ENV="development"
Now environment on terminal should display development
12. Because the name off the application is app.py we don't need to set up the FLASK_APP variable
13. To start Flask backend run the command > flask run

Frontend - React setup
1. nvm (Node Version Manager) is a tool that allows you to download and install Node.js. Check if you have it installed via nvm --version. > curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
2. npm (Node Package Manager) is a tool that allows you to install javascript packages. Check if you have it installed via npm --version.
3. npm comes with Node.js so if you have node installed (node --version) you most likely have npm installed as well.
4. Node.js is a run-time environment which includes everything you need to execute a program written in JavaScript. It’s used for running scripts on the server to render content before it is delivered to a web browser.
5. For this app you need Node.js and NPM installed. You can find instructions to install on windows here https://phoenixnap.com/kb/install-node-js-npm-on-windows
6. To create an react app from start you have to run the command > npx create-react-app <app_name>
7. To start React backend run the command > npm start > inside the folder where App.js is located

Connecting Frontend to Backend
1.  Set the proxy to the port running flask on package.json

Note: Command for flask is pip command for react is npm
