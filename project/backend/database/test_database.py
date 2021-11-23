import mysql.connector as mysql

class TestDatabase:

    def __init__(self):
        self.host = 'us-cdbr-east-04.cleardb.com'
        self.user = 'bc1d7f356e50ac'
        self.password = '54d33461'
        self.database = 'heroku_439b39a3aae2b79'

    def connectDB(self):
        return mysql.connect(self.host, self.user, self.password, self.database)