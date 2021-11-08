
import unittest
import mysql.connector

def add(table, input, mycur):
    return ""

def retrieve(table, keyword, mycur):
    x= mycur.execute("SELECT * FROM ITEM WHERE name LIKE '%%%s%%' OR desc_item LIKE '%%%s%%'"%(keyword, keyword))
    res = mycur.fetchall()
    print(res)
    return res

def upgrade(table, keyword, mycur):
    return ""

def delete(table, keyword, mycur):
    return ""

class TestStringMethods(unittest.TestCase):

    # def test_add(self):
    #     self.assertEqual(add("ITEM", ), "")

    def test_retrieve(self):
        mydb = mysql.connector.connect(
            host='us-cdbr-east-04.cleardb.com',
            user='b1c819ea406612',
            password='35195fc1',
            database='heroku_993345239501248',
            pool_name='my_connection_pool',
            pool_size=3
        )
        mycur = mydb.cursor(buffered=True)
        self.assertListEqual(retrieve("ITEM", "iPhone", mycur), "[(5, 'iPhone 13 Pro', Decimal('1200.0000'), 'Apple Inc, iphone13pro cellphone', 100, 'Testing')]")

    # def test_update(self):
    #     self.assertEqual(upgrade("ITEM"), "Harunobu")

    # def test_delete(self):
    #     self.assertEqual(delete("ITEM"), "Harunobu")

if __name__ == '__main__':
    unittest.main()

