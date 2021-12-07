from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

from project.tests.ui_tests.TestSuiteBase import TestSuiteBase


class Login(TestSuiteBase):

    def testById(self, msg):
        try:
            data1 = {
                'username': 'test_user',
                'password': '1234Abcd@',
                'repeatPassword': '1234567',
                'mailBox': 'test_user@bu.edu'
            }
            element = self.driver.find_element(By.ID, data1)
            element.send_keys(1)
            element.send_keys(Keys.TAB)
            prompt = self.driver.find_element(By.CLASS_NAME, data1).text
            assert prompt == '', msg
            return 1
        except Exception as e:
            print(e)
            return 0

    def testCase(self, data, index):
        self.driver.find_element(By.CLASS_NAME, 'the-account').click()
        self.driver.find_element(By.CLASS_NAME, 'login-sign').click()
        flag1 = self.testById(self, self.driver, 'username', data['username'], 'invalid username')
        flag2 = self.testById(self, self.driver, 'password', data['password'], 'invalid password')
        flag3 = self.testById(self, self.driver, 'repeat-password', data['repeatPassword'], 'invalid repeatPassword')
        flag4 = self.testById(self, self.driver, 'mailBox', data['mailBox'], 'invalid mailbox')
        if flag1 and flag2 and flag3 and flag4:
            print('Passed the test{}\n'.format(index))

    if __name__ == '__main__':

        data2 = {
            'username': 'test',
            'password': '1234567a',
            'repeatPassword': '1234567a',
            'mailBox': '123@qq.cc'
        }
        TestSuiteBase.main()
        # testCase(data1, 1)
        # testCase(browser, data2, 2)
