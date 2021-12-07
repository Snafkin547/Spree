from ..database.prod_database import ProdDatabase
from mysql.connector import Error

def findUserByMailbox(mailbox):
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    sql_select_query = "SELECT * FROM cp_user WHERE email = '%s'" % mailbox
    results = ""
    try:
        my_cur.execute(sql_select_query)
        results = my_cur.fetchone()
    except Error as e:
        print(e)
    finally:
        my_cur.close()
        my_conn.close()
        return results
    
