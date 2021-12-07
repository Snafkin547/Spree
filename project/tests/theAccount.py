from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


def testById(browser, divId, value, msg):
    try:
        element = browser.find_element(By.ID, divId)
        element.send_keys(value)
        element.send_keys(Keys.TAB)
        prompt = browser.find_element(By.CLASS_NAME, divId).text
        assert prompt == '', msg
        return 1
    except Exception as e:
        print(e)
        return 0


def testCase(browser, data, index):
    print('start the test' + str(index))
    test_url = 'http://127.0.0.1:5000/'
    browser.get(test_url)
    browser.find_element(By.CLASS_NAME, 'the-account').click()
    browser.find_element(By.CLASS_NAME, 'login-sign').click()
    flag1 = testById(browser, 'username', data['username'], 'invalid username')
    flag2 = testById(browser, 'password', data['password'], 'invalid password')
    flag3 = testById(browser, 'repeat-password', data['repeatPassword'], 'invalid repeatPassword')
    flag4 = testById(browser, 'mailBox', data['mailBox'], 'invalid mailbox')
    if flag1 and flag2 and flag3 and flag4:
        print('Passed the test{}\n'.format(index))


if __name__ == '__main__':
    chrome_path = 'D:\\webdriver\\chromedriver.exe'
    browser = webdriver.Chrome(executable_path=chrome_path)

    data1 = {
        'username': 'tes',
        'password': '123456',
        'repeatPassword': '1234567',
        'mailBox': '123@123'
    }
    data2 = {
        'username': 'test',
        'password': '1234567a',
        'repeatPassword': '1234567a',
        'mailBox': '123@qq.cc'
    }
    testCase(browser, data1, 1)
    print('\n')
    # testCase(browser, data2, 2)
