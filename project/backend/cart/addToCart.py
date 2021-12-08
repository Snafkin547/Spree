from ..database.prod_database import ProdDatabase
from mysql.connector import Error

def addToCart(name):
# database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    sql_insertproduct = "INSERT INTO cp_cart_item (product_id) SELECT product_id FROM cp_product WHERE name = %s"%(name)
    try:
        my_cur.execute(sql_insertproduct)
        my_db.commitDB()
        my_cur.close()
        return True
    except Error as e:
        print(e)
