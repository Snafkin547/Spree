def register(info, mycur):
    mycur.execute("INSERT INTO USERS (Fname, Lname, email, isBuyer) VALUES (%s, %s, %s, 1)"%(info['username'], info['password'], info['mailBox']))
    return True