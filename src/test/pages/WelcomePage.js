const{By} = require('selenium-webdriver');
const Helper = require('../pages/helper/Helper')

class WelcomePage {
    #helper
    #usLinkImage

    constructor(driver) {
        this.driver = driver;
        this.#helper = new Helper(driver)

        this.#usLinkImage = By.className('us-link');
    }

    async clickUSLinkImage() {
        this.#helper.checkVisibilityAndClick(this.#usLinkImage)
    }
}

module.exports = WelcomePage;
