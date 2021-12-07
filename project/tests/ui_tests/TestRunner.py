from unittest import TestLoader, TestSuite, TextTestRunner
from tests.Login import Login
from tests.LandingPage import LandingPage
from tests.Search import Search

if __name__ == '__main__':
    
    loader = TestLoader()
    suite = TestSuite((
        #loader.loadTestsFromTestCase(LandingPage),
        loader.loadTestsFromTestCase(Search),
        loader.loadTestsFromTestCase(Login)
    ))
    
    runner = TextTestRunner(verbosity=2)
    runner.run(suite)