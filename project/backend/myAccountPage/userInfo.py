from ..database.prod_database import ProdDatabase

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__first_name__)

# SearchBar results
def findUserInfo(user_id):
   # database connector
    my_db = ProdDatabase()
    my_conn = my_db.connectDB()
    mycur = my_conn.cursor(buffered=True)
    
    #print ' '.join([line.strip() for line in sql.splitlines()]).strip()
    query = """
    SELECT first_name, last_name FROM cp_user WHERE user_id=""" + str(user_id)
 
    mycur.execute(query)
    res = mycur.fetchall()

    data = []
    
    for row in res:
        data.append({
            "first_name": row[0],
            "last_name": row[1],
            
        })
    
    mycur.close()
    # keys=[ "first name", "last name", "email","address"]
    return data
    
