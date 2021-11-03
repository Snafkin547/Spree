# SearchBar results
def searchInput(keyword, mycur):
    mycur.execute('set max_allowed_packet=67108864')
    mycur.execute("SELECT * FROM ITEM WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    if res:
        res = map(lambda x: x[1], res)
        return 'We prepared '+', '.join(res)+' for you!'
    return 'Sorry, we do not have what you want.'