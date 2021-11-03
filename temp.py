import mysql.connector

mydb = mysql.connector.connect(
  host='us-cdbr-east-04.cleardb.com',
  user='b1c819ea406612',
  password='35195fc1',
  database='heroku_993345239501248',
)

mycursor = mydb.cursor()

#sql = 'INSERT INTO USER (username) VALUES (%s);'
# val = ('Mikkel Henriksen',)
# mycursor.execute(sql, val)
# mydb.commit()

print(mycursor.rowcount, "record inserted.")

sql = 'SELECT * FROM USER;'
mycursor.execute(sql)
mydb.commit()

print(mycursor.rowcount, "record retrieved.")