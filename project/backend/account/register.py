import mysql.connector
from werkzeug.security import generate_password_hash#, check_password_hash
def register(info):
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    mydb.commit()
    mycur = mydb.cursor(buffered=True)
    mycur.execute("INSERT INTO USER (username, password, email, isBuyer) VALUES (%s, '%s', %s, 1)"%(info['username'], generate_password_hash(info['password']), info['mailBox']))
    return True