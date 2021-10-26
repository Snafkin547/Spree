from werkzeug.security import generate_password_hash#, check_password_hash
def register(info, mycur):
    mycur.execute("INSERT INTO USER (username, password, email, isBuyer) VALUES (%s, '%s', %s, 1)"%(info['username'], generate_password_hash(info['password']), info['mailBox']))
    return True