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