const {By, until} = require('selenium-webdriver')
class LoginPage {
    #SignInButton
    #driver
    constructor(driver){
        this.#driver = driver
        this.#SignInButton = By.className('cia-form__controls ')

    }

    async getTitle(){
        await this.#driver.wait(until.elementLocated(this.#SignInButton), 10000);
        return await this.#driver.getTitle()
    }
}

module.exports = LoginPage