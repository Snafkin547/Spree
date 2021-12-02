
from ..database.prod_database import ProdDatabase
# SearchBar results
def pickItem():
    # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    mycur = my_conn.cursor(buffered=True)
    mycur.execute("SELECT * FROM cp_product ORDER BY RAND() LIMIT 2")
    res = mycur.fetchall()
    print(res)
    mycur.close()
    keys=["image", "name", "price"]
    return dict(zip(keys,[res[0][7],res[0][2],float(res[0][5])])), dict(zip(keys,[res[1][7],res[1][2],float(res[1][5])]))
    
pickItem()