import mysql.connector
from werkzeug.security import generate_password_hash#, check_password_hash
def insertCheckoutInfoToDB(inputObject):
    mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248'
    )

    mycur = mydb.cursor(buffered=True)
   
    #add all address fields
    mycur.execute("INSERT INTO cp_user_address (user_id, address_line1, address_line2, city, state, postal_code) VALUES (0000000025, '%s', '%s', '%s', '%s', '%s') "%(inputObject['address1'], inputObject['address2'], inputObject['city'], inputObject['state'], inputObject['zip']))
    
    #add all billing fields
    mycur.execute("INSERT INTO cp_payment_details (user_id, name_on_card, card_number, exp_month, exp_year, bill_zipcode, security_code) VALUES (0000000025, '%s', '%s', '%s', '%s', '%s', '%s') "%(inputObject['nameCard'], inputObject['ccNumber'], inputObject['exp_month'], inputObject['exp_year'], inputObject['billingZip'], inputObject['secCode']))
    mydb.commit()
    print("finished insert to db")
    return "updated DB in heroku"