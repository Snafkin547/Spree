from ..database.prod_database import ProdDatabase
from mysql.connector import Error

def removeFromCart(removeList):
    # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    try:
        for s in removeList:
            sql_deleteCart = "DELETE FROM cp_cart_item WHERE product_id = (SELECT product_id FROM cp_product WHERE name = '%s')"%(s)
            my_cur.execute(sql_deleteCart)
        my_db.commitDB()
        my_cur.close()
        return True
    except Error as e:
        print(e)