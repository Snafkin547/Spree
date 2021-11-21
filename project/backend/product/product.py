import mysql.connector

# SearchBar results
def pickItem():
    # database connector
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    mycur = mydb.cursor(buffered=True)
    mycur.execute("SELECT * FROM cp_product ORDER BY RAND() LIMIT 2")
    res = mycur.fetchall()
    print(res)
    mycur.close()
    keys=["image", "name", "price"]
    return dict(zip(keys,[res[0][7],res[0][2],float(res[0][5])])), dict(zip(keys,[res[1][7],res[1][2],float(res[1][5])]))
    
pickItem()