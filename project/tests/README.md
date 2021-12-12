# readme - Selenium

Selenium is an automated framework for frontend testing.

## Installation

1. Selenium comes in a **library** for all the languages that it supports. For Python's Selenium library, open a command line and type:

   ``````
   pip install selenium
   ``````

2. Next, we'll need a **browser driver** for Selenium, so that it has something to control as a testing site. You can use whatever browser you like for this.

   [Chrome](https://sites.google.com/chromium.org/driver/) / [Edge]([Microsoft Edge Driver - Microsoft Edge Developer](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)) / [Firefox](https://github.com/mozilla/geckodriver/releases) / [Safari](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

3. Move your driver to somewhere that's in **PATH**, or leave it somewhere you know and manually specify the path in your code. Relative paths work as well.

## Running the tests

1. To run individual tests by accessing the directory the test exists `project/tests/ui_tests/tests`. 
    Inside the tests directory run the individual test by typing the test suite name: 
    
``````
LandingPage.py 
`````` 

2. To run all tests use TestRunner configuration by accessing the directory where the file exists `project/tests/ui_tests`. 
    Inside the directory run the TestRunner configuration to run all tests by typing the test suite name: 
    
``````
TestRunner.py 
`````` 

Note: For some reason running from the command line have import issues, in order to run all the test we have created
a Python configuration for TestRunner.py script. We were able to run all the tests that way

You should have a browser window opening after running the program.