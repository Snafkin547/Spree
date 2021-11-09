import unittest

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

class TestSuiteBase(unittest.TestCase):
    envDatabase = None
    tests_started = 0
    tests_finished = 0

    @classmethod
    def setUpClass(cls):
        # Run once at the beggining of each test suite

        # # paths
        # path_to_your_driver = './web_drivers/msedgedriver.exe'
        # your_page = 'http://127.0.0.1:3000/'

        # # create webdriver object
        # # change your browser driver here
        # driver = webdriver.Edge(executable_path=path_to_your_driver)

        # # get page
        # driver.get(your_page)
        # print("webpage title: ")
        # print(driver.title)

        # self.driver = webdriver.Chrome(
        #     "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        # self.driver.maximize_window()
        # self.driver.get("http://localhost:3000/Home")

        chrome_options = Options()
        cls.driver = webdriver.Chrome(chrome_options=chrome_options)

        # Chrome information for debug purposes
        print("Chrome Version:  " + cls.driver.capabilities['browserVersion'])
        print("ChromeDriver Version:  " + cls.driver.capabilities['chrome']['chromeDriverVersion'])

    def setUp(self):
        self.testSuite = ""
        self.testName = ""

    def tearDown(self):
        self.driver.close()
