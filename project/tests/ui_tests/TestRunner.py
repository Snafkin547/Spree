import unittest
from unittest import runner

class TestSet1(unittest.TestCase):
    def test1(self):
        self.assertEqual('foo'.upper(), 'FOO')
    
    def test2(self):
        a = 1 + 1
        self.assertEqual(a, 2)

if __name__ == '__main__':
    suite = unittest.TestSuite()
    suite.addTest(unittest.makeSuite(TestSet1))

    runner = unittest.TextTestRunner()
    runner.run(suite)