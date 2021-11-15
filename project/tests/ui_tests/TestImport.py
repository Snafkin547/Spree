import unittest
from unittest import runner
import TestRunner

if __name__ == '__main__':

    suite = unittest.TestSuite()
    suite.addTest(unittest.makeSuite(TestRunner.TestSet1))

    runner = unittest.TextTestRunner()
    runner.run(suite)