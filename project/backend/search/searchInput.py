from database.connection import connection
import mysql.connector

# SearchBar results
def searchInput(keyword):
    # database connector
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    mycur = connection()
    mycur.execute("SELECT * FROM ITEM WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    mycur.close()
    if res:
        res = map(lambda x: x[1], res)
        return 'We prepared '+', '.join(res)+' for you!'
    return 'Sorry, we do not have what you want.'