import mysql.connector

# SearchBar results
def addToCart(name):
    # database connector
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )
    mycur = mydb.cursor(buffered=True)
    mycur.execute("INSERT INTO cp_cart_item (product_id) SELECT product_id FROM cp_product WHERE name = %s"%(name))
    mydb.commit()
    mycur.close()
    return True