import unittest
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities


class TestSuiteBase(unittest.TestCase):

    def setUp(self):
        # paths       
        path_chrome_driver = 'C:/Users/ana_m/Desktop/BU/CS673-SftwEng-Fall2021/repo/BUMETCS673A1F21P4/project/tests/Selenium/web_drivers/chromedriver.exe'
        testing_env = 'https://chip-spree-testenv.herokuapp.com/'

        d = DesiredCapabilities.CHROME
        # change your browser driver here
        self.driver = webdriver.Chrome(executable_path=path_chrome_driver, desired_capabilities=d)
        self.driver.maximize_window()
        self.driver.get(testing_env)

        # Chrome information and name of test running
        print("Chrome Version:  " + self.driver.capabilities['browserVersion'])
        print("ChromeDriver Version:  " + self.driver.capabilities['chrome']['chromedriverVersion'])
        print("Starting test " + self._testMethodName)

    def tearDown(self):
        print("Test " + self._testMethodName + " finished")
        self.driver.close()