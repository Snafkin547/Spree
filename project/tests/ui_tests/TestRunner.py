from unittest import TestLoader, TestSuite, TextTestRunner
from tests.LandingPage import LandingPage
import tests.ui_tests.TestSuiteBase

if __name__ == '__main__':
    
    loader = TestLoader()
    suite = TestSuite((
        loader.loadTestsFromTestCase(LandingPage)
    ))
    
    runner = TextTestRunner(verbosity=2)
    runner.run(suite)