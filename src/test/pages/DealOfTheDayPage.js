const {By, until} = require('selenium-webdriver')
const Helper = require('./helper/Helper')

class DealOfTheDayPage {
    #DealOfTheDayBannerContainer
    #CountDownClock
    #SignUpSection
    #SignUpSectionHeader
    #EmailSignUpButton
    #TextSignUpButton
    #driver
    #helper
    constructor(driver){
        this.#helper = new Helper(driver)

        this.#DealOfTheDayBannerContainer = By.css('')
        this.#CountDownClock = By.className('')
        this.#SignUpSection = By.id('')
        this.#SignUpSectionHeader = By.css('')
        this.#EmailSignUpButton = By.xpath('')
        this.#TextSignUpButton = By.xpath('')

        this.#driver = driver
    }

    async getTitle(){
        await this.#driver.wait(until.elementLocated(this.#DealOfTheDayBannerContainer), 10000)
        return await this.#driver.getTitle()
    }

    async getEmailSignUpButton(){
        return await this.#driver.findElement(this.#EmailSignUpButton)
    }

    async getTextSignUpButton(){
        return await this.#driver.findElement(this.#TextSignUpButton)
    }

    async getSignUpSectionHeader(){
        return await this.#driver.findElement(this.#SignUpSectionHeader)
    }
}

module.exports = DealOfTheDayPage