const {By, until} = require('selenium-webdriver')

class CartPage {
    #checkOutButton 
    #driver
    constructor(driver){
        this.#driver = driver
        this.#checkOutButton = By.className('checkout-buttons__checkout')
    }

    async findAndClick(locator, timeout = 5000) {
        await this.#driver.wait(until.elementLocated(locator), timeout);
        await this.#driver.findElement(locator).click();
    }


    async clickOnCheckOutButton(){
        // await this.#driver.wait(until.elementLocated(this.#checkOutButton), 5000);
        // await this.#driver.findElement(this.#checkOutButton).click()

        await this.findAndClick(this.#checkOutButton)
    }
}

module.exports = {CartPage}
