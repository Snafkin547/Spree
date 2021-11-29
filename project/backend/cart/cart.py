import mysql.connector

def pickCart():
    # database connector
    # mydb = mysql.connector.connect(host='us-cdbr-east-04.cleardb.com',user='b1c819ea406612',password='35195fc1',database='heroku_993345239501248')
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    mycur = mydb.cursor(buffered=True)
    mycur.execute("SELECT * FROM cp_product WHERE product_id in (SELECT DISTINCT product_id FROM cp_cart_item)")
    res = mycur.fetchall()
    mycur.close()
    keys=["image", "name", "price"]
    i = 0
    d = dict()
    for line in res:
        d[i] = dict(zip(keys,[line[7],line[2],float(line[5])]))
        i += 1
    print(d)
    return d
    
pickCart()