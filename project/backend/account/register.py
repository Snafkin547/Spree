from ..database.prod_database import ProdDatabase
from mysql.connector import Error
# check_password_hash
from werkzeug.security import generate_password_hash

def register(info):
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    sql_select_query = "INSERT INTO cp_user (username, password, first_name, last_name, email, isSeller) VALUES ('%s', '%s', '%s', '%s', '%s', 0)"%(info['username'], generate_password_hash(info['password']), info['firstname'], info['lastname'], info['mailBox'])
    try:
        my_cur.execute(sql_select_query)
        my_db.commit()
        return True
    except Error as e:
        print(e)
    finally:
        my_cur.close()
        my_conn.close()