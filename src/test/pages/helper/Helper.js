const {until} = require('selenium-webdriver')
class Helper {
    #driver
    constructor(driver){
        this.#driver = driver
    }

    async findAndClick(locator, timeout = 5000) {
        try {
            await this.#driver.wait(until.elementLocated(locator), timeout);
            await this.#driver.findElement(locator).click();
        } catch (error) {
            console.log("Element not found, continuing with the script.")
        }
      
    }

    async moveAndClick(targetElement, locator, timeout = 10000) {
        this.moveToElement(targetElement)
        await this.#driver.wait(until.elementLocated(locator), timeout);
        await targetElement.findElement(locator).click();
    }

    async findAndEnterValue(locator, value, timeout=5000){
        await this.#driver.wait(until.elementLocated(locator), timeout);
        await this.#driver.findElement(locator).sendKeys(value)
    }

    async moveToElement(element){
        // Create an instance of Actions
        let actions = this.#driver.actions({bridge: true});

        // Move to the element (hover)
        await actions.move({origin: element}).perform();
    }

    async elementIsVisible(locator, timeout = 10000) {
        try {
            await this.#driver.wait(until.elementIsVisible(locator), timeout);
            return true
        } catch (error) {
            console.log("Element not found, continuing with the script.")
            return false
        }
      
    }
}

module.exports = Helper