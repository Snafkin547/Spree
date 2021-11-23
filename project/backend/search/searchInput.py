from ..database.prod_database import ProdDatabase

# SearchBar results
def searchInput(keyword):
    mydb = ProdDatabase()
    myconn = mydb.connectDB()
    mycur = myconn.cursor(buffered=True)
    mycur.execute("SELECT * FROM cp_product WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    if res:
        res = map(lambda x: x[1], res)
        return 'We prepared '+', '.join(res)+' for you!'
    return 'Sorry, we do not have what you want.'