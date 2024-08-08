const WelcomePage = require('./WelcomePage')
const {By, until, WebElement} = require('selenium-webdriver')

class HomePage {
    constructor(driver){
        this.driver = driver
        this.welcomePage = new WelcomePage(driver)
    }

    accountDropDownButton = By.id('account-menu-account-button')
    signInButton = By.linkText('Sign In')
    searchInputBox = By.id('gh-search-input')
    searchButton = By.className('header-search-button')
    searchSuggestionBox = By.id('suggestViewClientComponent')
    skuItemList = By.className('sku-item-list')
    skuListItems = skuItemList.findElements(By.css('li'))


    async clickOnAccountDropDownButton(){
        await this.driver.findElement(this.accountDropDownButton).click()
    }

    async clickOnSignInButton(){
        await this.driver.wait(until.elementLocated(this.signInButton), 5000);
        await this.driver.findElement(this.signInButton).click()
    }
    
    async navigateToLoginPage() {
        await this.welcomePage.clickUSLinkImage()
        await this.clickOnAccountDropDownButton()
        await this.clickOnSignInButton()
    }

    async selectItemFromOrderedList() {
       if(skuListItems.length){
        
       }
    }
}

module.exports = HomePage
