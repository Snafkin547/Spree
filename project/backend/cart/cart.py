from ..database.prod_database import ProdDatabase
from mysql.connector import Error

def pickCart():
    # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    sql_selectCart = "SELECT * FROM cp_product WHERE product_id in (SELECT DISTINCT product_id FROM cp_cart_item)"
    try:
        my_cur.execute(sql_selectCart)
        res = my_cur.fetchall()
        my_cur.close()
        keys=["image", "name", "price"]
        i = 0
        d = dict()
        for line in res:
            d[i] = dict(zip(keys,[line[7],line[2],float(line[5])]))
            i += 1
        print(d)
        return d
    except Error as e:
        print(e)
    
pickCart()