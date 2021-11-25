from ..database.prod_database import ProdDatabase
from mysql.connector import Error
import mysql.connector

# SearchBar results
def searchInput(keyword):
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)
    sql_select_query = "SELECT * FROM cp_product WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword)
    res_string = 'Sorry, we did not find a product related to your search.'
    try:
        my_cur.execute(sql_select_query)
        res = my_cur.fetchall()
        if res:
            # index 2 represents the column name for product name in the database
            res = map(lambda x: x[2], res)
            res_string = 'We prepared '+', '.join(res)+' for you!'
    except Error as e:
        res_string = 'An error occourred processing the search.'
        print(e)
    finally:
        my_cur.close()
        my_conn.close()
        return res_string