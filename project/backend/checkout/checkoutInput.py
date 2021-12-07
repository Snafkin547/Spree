from ..database.prod_database import ProdDatabase
from mysql.connector import Error

def insertCheckoutInfoToDB(inputObject):
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    my_cur = my_conn.cursor(buffered=True)

    #add all address fields
    my_cur.execute("INSERT INTO cp_user_address (user_id, delivery_to, address_line1, address_line2, city, state, postal_code) VALUES (0000000025, '%s', '%s', '%s', '%s', '%s', '%s') "%(inputObject['name'], inputObject['address1'], inputObject['address2'], inputObject['city'], inputObject['state'], inputObject['zip']))
    
    #add all billing fields
    my_cur.execute("INSERT INTO cp_payment_details (user_id, provider, name_on_card, card_number, exp_month, exp_year, bill_zipcode, security_code) VALUES (0000000025, '%s', '%s', '%s', '%s', '%s', '%s', '%s') "%(inputObject['typeCard'], inputObject['nameCard'], inputObject['ccNumber'], inputObject['exp_month'], inputObject['exp_year'], inputObject['billingZip'], inputObject['secCode']))
    
    
    # execute two inserts in a commit
    my_conn.commit()
    print("finished insert to db")
    my_cur.close()
    my_conn.close()
    return "updated DB in heroku"