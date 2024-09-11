const {By, until} = require('selenium-webdriver')
const Helper = require('../pages/helper/Helper')

class CartPage {
    #checkOutButton
    #membershipModal
    #membershipModalCloseButton 
    #driver
    constructor(driver){
        this.#driver = driver
        this.#checkOutButton = By.className('checkout-buttons__checkout')
        this.#membershipModal = By.xpath('my-bby-modal-wrapper')
        this.#membershipModalCloseButton = By.xpath('')
    }

    // async findAndClick(locator, timeout = 5000) {
    //     await this.#driver.wait(until.elementLocated(locator), timeout);
    //     await this.#driver.findElement(locator).click();
    // }

    async closeMembershipModel(){
        const helper = new Helper(this.#driver)
        await helper.checkVisibilityAndClick(this.#membershipModalCloseButton)
    }

    async clickOnCheckOutButton(){
        // await this.#driver.wait(until.elementLocated(this.#checkOutButton), 5000);
        // await this.#driver.findElement(this.#checkOutButton).click()
        const helper = new Helper(this.#driver)
        await helper.checkVisibilityAndClick(this.#checkOutButton)
    }
}

module.exports = CartPage
