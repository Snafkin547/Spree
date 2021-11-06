def findUserByMailbox(mailbox, mycur):
    mycur.execute("SELECT * FROM user WHERE email = '%s'" % mailbox)
    results = mycur.fetchone()
    return results
