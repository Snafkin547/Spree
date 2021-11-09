import mysql.connector

class connection:
    def __init__(self):

        mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
        )
        return self.mydb.cursor(buffered=True)

