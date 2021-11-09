from TestSuiteBase import TestSuiteBase

class LandingPage(TestSuiteBase):

    def test_search_tool(self):

        TestSuiteBase.setUp()
        if self.driver.find_element_by_xpath('//*[@id="header"]//table//tbody//tr//td[2]//div//button'):
            print("search button found.")
        TestSuiteBase.tearDown()

    def test_login_button(self):
        TestSuiteBase.setUp()
        my_account_button = self.driver.find_elements_by_xpath("//span[contains(text(), 'My Account')]")
        TestSuiteBase.tearDown()