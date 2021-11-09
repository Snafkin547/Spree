from project.tests.unit_tests.TestSuiteBase import TestSuiteBase
from project.tests.unit_tests.web_elements.web_elements import WebElements

class LandingPage(TestSuiteBase):

    TestSuiteBase.setUp()

    def test_search_tool(self):        
        if self.driver.find_element_by_xpath(WebElements.btn_search_xpath):
            print("search button found.")
        
    def test_login_button(self):
        self.driver.find_elements_by_xpath(WebElements.btn_my_account_xpath).click()

    TestSuiteBase.tearDown()