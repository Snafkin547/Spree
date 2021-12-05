from telnetlib import EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from project.tests.ui_tests.TestSuiteBase import TestSuiteBase
from project.tests.ui_tests.web_elements.web_elements import WebElements


class LandingPage(TestSuiteBase):

    def test_elements_display(self):
        self.driver.find_element_by_xpath(WebElements.txt_box_search)
        self.driver.find_element_by_xpath(WebElements.btn_search)
        self.driver.find_element_by_xpath(WebElements.btn_my_cart)
        self.driver.find_element_by_xpath(WebElements.btn_my_account)
        self.driver.find_element_by_xpath(WebElements.btn_home)
        self.driver.find_element_by_xpath(WebElements.panel_product_list)

    def test_home_button(self):
        search_box = self.driver.find_element_by_xpath(WebElements.txt_box_search)
        search_box.send_keys('apple watch')
        self.driver.find_element_by_xpath(WebElements.btn_search).click()
        if not self.driver.find_element_by_xpath(WebElements.panel_product_list).is_displayed():
            self.driver.find_element_by_xpath(WebElements.btn_home).click()
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, WebElements.panel_product_list)))
        else:
            raise Exception("List of products from home page is still being displayed.")

    if __name__ == "__main__":
        TestSuiteBase.main()
