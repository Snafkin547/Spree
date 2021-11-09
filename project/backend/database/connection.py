import mysql.connector

class connection():
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    def getconnection(self):
        return self.mydb.cursor(buffered=True)