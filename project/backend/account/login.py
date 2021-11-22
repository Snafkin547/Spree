from werkzeug.security import check_password_hash  # check_password_hash
from project.backend.account.findUser import findUserByMailbox


def loginByMailBox(info, mycur):
    user = findUserByMailbox(info['mailBox'], mycur)
    if user:
        password = user[4]
        if check_password_hash(password, info['password']):
            return '1'
        else:
            return '0'
    else:
        return '-1'
