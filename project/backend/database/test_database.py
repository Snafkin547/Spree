import mysql.connector as mysql
from mysql.connector import Error

class TestDatabase:

    def __init__(self):
        self.host = 'us-cdbr-east-04.cleardb.com'
        self.user = 'bc1d7f356e50ac'
        self.password = '54d33461'
        self.database = 'heroku_439b39a3aae2b79'

    def connectDB(self):
        try:
            conn = mysql.connector.connect(host = self.host, user = self.user, password = self.password, database = self.database)
            if conn.is_connected():
                db_Info = conn.get_server_info()
                print("Connected to MySQL Server version ", db_Info)
            return conn
        except Error as e:
            print ("ERROR %d IN CONNECTION: %s" % (e.args[0], e.args[1]))