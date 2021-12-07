from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from project.tests.ui_tests.TestSuiteBase import TestSuiteBase
from project.tests.ui_tests.web_elements.web_elements import WebElements
from selenium.webdriver.common.keys import Keys


class Search(TestSuiteBase):

    def test_search_product(self):
        # search for a key word that will be found by product name
        search_box = self.driver.find_element_by_xpath(WebElements.txt_box_search)
        search_box.send_keys('apple watch')
        self.driver.find_element_by_xpath(WebElements.btn_search).click()
        self.driver.implicitly_wait(5)
        search_res = self.driver.find_element(By.CSS_SELECTOR, "h4").tag_name
        # h4[contains(text(), 'We prepared Apple Watch Series 7 for you!'"))
        #search_res = self.driver.find_element_by_xpath(WebElements.label_search_msg).find_element_by_css_selector('h4.text')
        # #header > table > tbody > tr > td.search__bar > div > h4
        print(search_res)
        assert search_res == "We prepared Apple Watch Series 7 for you!"

        # search for a key word that will be found by product description
        search_box = self.driver.find_element_by_xpath(WebElements.txt_box_search)
        search_box.send_keys('45')
        self.driver.find_element_by_xpath(WebElements.btn_search).click()
        self.driver.implicitly_wait(10)
        search_res = self.driver.find_element_by_xpath(WebElements.label_search_msg)
        print(search_res)
        assert search_res == "We prepared Apple Watch Series 7 for you!"

    def test_search_product_not_found(self):
        search_box = self.driver.find_element_by_xpath(WebElements.txt_box_search)
        search_box.send_keys('stadium')
        self.driver.find_element_by_xpath(WebElements.btn_search).click()
        search_res = self.driver.find_element_by_xpath(WebElements.label_search_msg)
        assert search_res.text == "Sorry, we did not find a product related to your search."

        self.driver.find_element_by_xpath(WebElements.txt_box_search).clear()
        self.driver.find_element_by_xpath(WebElements.btn_search).click()
        search_res = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, WebElements.label_search_msg)))
        assert search_res.text == "Please insert a product name to search for an item"

    def test_search_product_enter_key(self):
        search_box = self.driver.find_element_by_xpath(WebElements.txt_box_search)
        search_box.send_keys('stadium', Keys.ENTER)
        search_res = self.driver.find_element_by_xpath(WebElements.label_search_msg)
        assert search_res.text == "Sorry, we did not find a product related to your search."

        self.driver.find_element_by_xpath(WebElements.txt_box_search).clear()
        search_box.send_keys('', Keys.ENTER)
        search_res = self.driver.find_element_by_xpath(WebElements.label_search_msg)
        assert search_res.text == "Please insert a product name to search for an item"

    if __name__ == "__main__":
        TestSuiteBase.main()
