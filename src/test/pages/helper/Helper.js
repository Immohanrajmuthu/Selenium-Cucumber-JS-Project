const {By, until} = require('selenium-webdriver')

class Helper {
    #driver
    #surveyWindow
    #surveyNoThanksButton
    constructor(driver){
        this.#driver = driver
        this.#surveyWindow = By.id('survey_blue_order')
        this.#surveyNoThanksButton = By.id('surveyNoThanksButton')
    }

    async #findAndClick(locator) {
        try {
            await this.#driver.findElement(locator).click();
        } catch (error) {
            this.logError("Element not found, continuing with the script.", error)
        }
      
    }

    async elementIsVisible(locator, timeout = 10000) {
        try {
            await this.#driver.wait(until.elementIsVisible(locator), timeout);
        } catch (error) {
            this.logError("Element not found, continuing with the script.", error)
            return false
        }
             return true
      
    }

    async checkVisibilityAndClick(locator, timeout = 10000){
        if (await this.elementIsVisible(locator, timeout)) {
            await this.#findAndClick(locator);
        }
    }

    
    async moveAndClickOnElement(element, timeout=10000){
        try {
            await this.moveToElement(element)
            await this.#driver.wait(until.elementIsVisible(element), timeout)
            await element.click()
        } catch (error) {
            this.logError("Element not found, continuing with the script", error)
        }

    }


    async fetchAndClick(targetElement, locator, timeout = 10000) {
        try {
            this.moveToElement(targetElement)
            await this.#driver.wait(until.elementLocated(locator), timeout);
            await targetElement.findElement(locator).click();
        } catch (error) {
            this.logError('Element not found, continuing with script', error)
        }
    }

    async findAndEnterValue(locator, value, timeout=5000){
       try {
        await this.#driver.wait(until.elementLocated(locator), timeout);
        await this.#driver.findElement(locator).sendKeys(value)
       } catch (error) {
        this.logError('Element not found, continuing with script', error)
       }

    }

    async moveToElement(element){
        // Create an instance of Actions
        let actions = this.#driver.actions({bridge: true});

        // Move to the element (hover)
        await actions.move({origin: element}).perform();
    }

    

    async closeSurveyWindow(){
        try {
            const visible = await this.elementIsVisible(this.#surveyWindow)
            if(visible){
                await this.findAndClick(this.#surveyNoThanksButton)
            }
        } catch (error) {
          this.logError('Element is not visible:', error)
        }
    }

    async getText(element){
        await this.elementIsVisible(element)
        return element.getText()
    }

    async switchToFrame(locator){
        let IFrame = await this.#driver.findElement(locator)
        await this.#driver.switchTo().frame(IFrame)

    }

    logError(message, error){
        console.log(`${message} ${error}`)
    }
}

module.exports = Helper