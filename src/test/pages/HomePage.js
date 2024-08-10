const WelcomePage = require('./WelcomePage')
const Helper = require('./helper/Helper')
const {By, until} = require('selenium-webdriver')

class HomePage {
    #accountDropDownButton
    #signInButton
    #searchInputBox
    #searchButton
    #skuItemList
    #goToCartButton
    #addToCartButton
    #surveyWindow
    #surveyNoThanksButton
    #driver
    #helper
    #welcomePage
    constructor(driver){
        this.#driver = driver
        this.#welcomePage = new WelcomePage(driver)
        this.#helper = new Helper(driver)

        this.#accountDropDownButton = By.id('account-menu-account-button')
        this.#signInButton = By.linkText('Sign In')
        this.#searchInputBox = By.id('gh-search-input')
        this.#searchButton = By.className('header-search-button')
        this.#skuItemList = By.className('sku-item-list')
        this.#addToCartButton = By.className('fulfillment-add-to-cart-button')
        this.#goToCartButton = By.linkText('Go to Cart')
        this.#surveyWindow = By.id('survey_blue_border')
        this.#surveyNoThanksButton = By.id('surveyNoThanksButton')
    }

     
    
    // async clickOnAccountDropDownButton(){
    //     await this.#driver.findElement(this.#accountDropDownButton).click()
    // }

    // async clickOnSignInButton(){
    //     await this.#driver.wait(until.elementLocated(this.#signInButton), 5000);
    //     await this.#driver.findElement(this.#signInButton).click()
    // }

    async clickOnGoToCartButton(){
        await this.#helper.findAndClick( this.#goToCartButton, 10000)
        // await this.#driver.wait(until.elementLocated(this.#goToCartButton), 10000);
        // await this.#driver.findElement(this.#goToCartButton).click()
    }

    async closeSurveyWindow(){
        let visible = await this.#helper.elementIsVisible(this.#surveyWindow)
        if(visible){
            await this.#helper.findAndClick(this.#surveyNoThanksButton)
        }
    }
    // async findAndClick(locator, timeout = 5000) {
    //     await this.#driver.wait(until.elementLocated(locator), timeout);
    //     await this.#driver.findElement(locator).click();
    // }

    // async findAndEnterValue(locator, value, timeout=5000){
    //     await this.#driver.wait(until.elementLocated(locator), timeout);
    //     await this.#driver.findElement(locator).sendKeys(value)
    // }
    
    
    async navigateToLoginPage() {
        await this.#welcomePage.clickUSLinkImage()
        await this.#helper.findAndClick(this.#accountDropDownButton)
        await this.clickOnSignInButton(this.#signInButton)
    }

    async searchProduct(procuct_name){
        // Find and Click on Searchbox
        // await this.#driver.wait(until.elementLocated(this.#searchInputBox), 5000)
        // await this.#driver.findElement(this.#searchInputBox).click()
       await this.#helper.findAndClick(this.#searchInputBox)

       // Enter product name to search
       // await this.#driver.findElement(this.#searchInputBox).sendKeys('Computer')
       await this.#helper.findAndEnterValue(this.#searchInputBox, procuct_name)

       //Click on search button
       // await this.#driver.findElement(this.#searchButton).click()
       await this.#helper.findAndClick(this.#searchButton)

    }

    async addProductIntoCart() {
       // Wait for product list to be dispalyed
      // await this.driver.wait(until.elementLocated(this.skuItemList), 5000);
       let skulist = await this.#driver.findElement(this.#skuItemList)
       let skuListItems = await skulist.findElements(By.css('li'))
       let targetSkuItem
       if(skuListItems.length){
            targetSkuItem = skuListItems[0]
       }
     
      this.#helper.moveAndClick(targetSkuItem, this.#addToCartButton) 

    }
}

module.exports = HomePage
