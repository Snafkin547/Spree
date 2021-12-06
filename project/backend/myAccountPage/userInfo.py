from ..database.prod_database import ProdDatabase
# SearchBar results
def findUserInfo(user_id):
   # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    mycur = my_conn.cursor(buffered=True)
    mycur.execute("""SELECT * FROM cp_order_items WHERE 
        INNER JOIN cp_order_details ON cp_order_items.order_id = cp_order_details.id
        INNER JOIN cp_product ON cp_product.product_id = cp_order_items.product_id
        INNER JOIN cp_user ON cp_user.user_id = cp_order_details.user_id
        WHERE cp_user.user_id=="""+user_id)
    res = mycur.fetchall()
    print(res)
    mycur.close()
    keys=[ "first name", "last name", "email","address"]
    return dict(zip(keys,[res[0][7],res[0][2],float(res[0][5])])), dict(zip(keys,[res[1][7],res[1][2],float(res[1][5])]))
    
findUserInfo()