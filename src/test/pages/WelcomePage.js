const{By} = require('selenium-webdriver');

class WelcomePage {
    constructor(driver) {
        this.driver = driver;
    }

    usLinkImage = By.className('us-link');

    async clickUSLinkImage() {
        await this.driver.findElement(this.usLinkImage).click();
    }
}

module.exports = WelcomePage;
