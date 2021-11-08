import mysql.connector

class connection():
    def getconnection():
        mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
        )
        return mydb.cursor(buffered=True)