# readme - Selenium

Selenium is an automated framework for frontend testing.

## Installation

1. Selenium comes in a **library** for all the languages that it supports. For Python's Selenium library, open a command line and type:

   ``````
   pip install selenium
   ``````

2. Next, we'll need a **browser driver** for Selenium, so that it has something to control as a testing site. You can use whatever browser you like for this.

   [Chrome](https://sites.google.com/chromium.org/driver/) / [Edge]([Microsoft Edge Driver - Microsoft Edge Developer](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)) / [Firefox](https://github.com/mozilla/geckodriver/releases) / [Safari](https://webkit.org/blog/6900/webdriver-support-in-safari-10/) ~~/ Or google it yourself~~

3. Move your driver to somewhere that's in **PATH**, or leave it somewhere you know and manually specify the path in your code. Relative paths work as well.

   - `smoke_test.py` uses a relative path. `.gitignore` has `*.exe` in it at time of writing this document (10/16/2021), so you should be fine if you have a driver somewhere.

## Basic usage

 `./scripts/smoke_test.py` is made for basic testing. Modifying instructions are available in its docstring (at the beginning of the file). 

Open a command line window in `./scripts` folder and **run the following command** once you have everything installed:

``````
python smoke_test.py
``````

You should have a browser window opening after running the program.

# readme - The testing site

- The folders are sorted by language and toolchain
- Documentation for each individual toolchain will be in `./whatever_toolchain/readme.md`
  - Please write your docs when you add new ones
- the following description listings are in random order