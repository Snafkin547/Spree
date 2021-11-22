from werkzeug.security import generate_password_hash  # , check_password_hash


def register(info, mycur):
    mycur.execute(
        "INSERT INTO USER (username,firstname,lastname, password, email, isBuyer) VALUES ('%s', '%s','%s','%s', '%s', 1)" % (
            info['username'], info['firstname'], info['lastname'], generate_password_hash(info['password']),
            info['mailBox']))
    return True
