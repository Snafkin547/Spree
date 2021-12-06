from ..database.prod_database import ProdDatabase
import sys
import json
from decimal import Decimal
# SearchBar results

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def pickOrderItem(user_id):
    # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    mycur = my_conn.cursor(buffered=True)
    query = """
        SELECT cp_product.`name`, cp_order_details.total, cp_user.first_name, cp_user.last_name
        FROM cp_order_items
        INNER JOIN cp_order_details ON cp_order_items.order_id = cp_order_details.id
        INNER JOIN cp_product ON cp_product.product_id = cp_order_items.product_id
        INNER JOIN cp_user ON cp_user.user_id = cp_order_details.user_id
        WHERE cp_user.user_id=""" + str(user_id)
        
    mycur.execute(query)
    res = mycur.fetchall()
    data = []
    
    for row in res:
        data.append({
            "name": row[0]
        })
    
    mycur.close()
    return data