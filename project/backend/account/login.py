from ..database.prod_database import ProdDatabase
from mysql.connector import Error
from werkzeug.security import check_password_hash  # check_password_hash
from project.backend.account.findUser import findUserByMailbox


def loginByMailBox(info):
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    res = '-1'
    try:
        user = findUserByMailbox(info['mailBox'])
        if user:
            password = user[2]
            if check_password_hash(password, info['password']):
                res = '1'
            else:
                res = '0'
    except Error as e:
        print(e)
    finally:
        my_cur.close()
        my_conn.close()
        return res
