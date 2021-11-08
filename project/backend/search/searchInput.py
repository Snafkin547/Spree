from database.connection import connection

# SearchBar results
def searchInput(keyword):
    # database connector
    mycur = connection()
    mycur.execute("SELECT * FROM ITEM WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    mycur.close()
    if res:
        res = map(lambda x: x[1], res)
        return 'We prepared '+', '.join(res)+' for you!'
    return 'Sorry, we do not have what you want.'