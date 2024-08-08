// features/support/hooks.js
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

BeforeAll(async function () {
    try {
        console.log('Setting up WebDriver');
        // This hook will run once before all scenarios
        const capabilities = Capabilities.edge()
        capabilities.set('edgeoptions', {'w3c':false})
        driver =  new Builder().withCapabilities(capabilities).build()
       // const options = new chrome.Options();
        // Uncomment the line below if you want to run Chrome in headless mode
        // options.addArguments('--headless');
        
      //  driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        this.driver = driver;
        console.log('WebDriver setup completed');
    } catch (error) {
        console.error('Error in BeforeAll hook:', error);
        throw error;
    }
});

AfterAll(async function () {
    try {
        // This hook will run once after all scenarios
        if (driver) {
          await driver.quit();
        }
    } catch (error) {
        console.error('Error in AfterAll hook:', error);
        throw error;
    }
});

Before(async function () {
    // This hook will run before each scenario
    // You can add code to set up the environment before each scenario
    console.log('Before hook, scenario started');
    this.driver = driver
});

After(async function () {
    // This hook will run after each scenario
    // You can add code to tear down the environment after each scenario
    console.log('After hook, scenario completed');
});

module.exports = { driver };
