import mysql.connector
from mysql.connector import Error

class ProdDatabase:

    def __init__(self):
        self.host = 'us-cdbr-east-04.cleardb.com'
        self.user = 'b1c819ea406612'
        self.password = '35195fc1'
        self.database = 'heroku_993345239501248'

    def connectDB(self):
        try:
            self.conn = mysql.connector.connect(host = self.host, user = self.user, password = self.password, database = self.database)
            if self.conn.is_connected():
                db_Info = self.conn.get_server_info()
                print("Connected to MySQL Server version ", db_Info)
            return self.conn
        except Error as e:
            print ("ERROR %d IN CONNECTION: %s" % (e.args[0], e.args[1]))
    
    def commitDB(self):
        self.conn.commit()