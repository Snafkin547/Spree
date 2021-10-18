# SearchBar results
def searchInput(keyword, mycur):
    mycur.execute("SELECT * FROM ITEM WHERE itemName LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    if res:
        res = map(lambda x: x[1], res)
        return 'We prepared '+', '.join(res)+' for you!'
    return 'Sorry, we do not have what you want.'