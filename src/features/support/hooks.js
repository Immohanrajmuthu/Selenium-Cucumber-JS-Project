const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
setDefaultTimeout(30000); // Set the default timeout to 30 seconds

let driver;

BeforeAll(async function () {
    try {
        console.log('Setting up WebDriver');
        // This hook will run once before all scenarios
        // Edge
        const capabilities = Capabilities.edge()
        capabilities.set('edgeoptions', {'w3c':false})
        driver =  await new Builder().withCapabilities(capabilities).build()
        await driver.manage().window().maximize();

        // Chrome
        //  const capabilities = Capabilities.chrome()
        //  capabilities.set('chromeoptions', {'w3c':false})
        //  driver = await new Builder().withCapabilities(capabilities).build()

        //  const capabilities = Capabilities.firefox()
        //  capabilities.set('fireboxoptions', {'w3c':false})
        //  driver = await new Builder().withCapabilities(capabilities).build()
         
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
         //  driver.quit();
          console.log('After all scenario: WebDriver Closed');
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
