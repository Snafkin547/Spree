import unittest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

class TestSuiteBase(unittest.TestCase):
    envDatabase = None
    tests_started = 0
    tests_finished = 0

    def setUp(self):
        # paths       
        path_chrome_driver = 'BUMETCS673A1F21P4\project\tests\Selenium\web_drivers\chromedriver.exe'
        testing_env = 'https://chip-spree-testenv.herokuapp.com/'

        # create webdriver object
        # change your browser driver here
        self.driver = webdriver.Chrome(executable_path=path_chrome_driver)
        self.driver.maximize_window()
        self.driver.get(testing_env)

        # Chrome information for debug purposes
        print("Chrome Version:  " + self.driver.capabilities['browserVersion'])
        print("ChromeDriver Version:  " + self.driver.capabilities['chrome']['chromeDriverVersion'])

    def tearDown(self):
        self.driver.close()