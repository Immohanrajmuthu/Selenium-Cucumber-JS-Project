const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert'); 
const HomePage = require('../../test/pages/HomePage')
const WelcomePage = require('../../test/pages/WelcomePage');
const { CartPage } = require("../../test/pages/CartPage");

   
  Given('User is in the best buy home page', async function () {
    await this.driver.get('https://www.bestbuy.com')
  }); 

  When('User add a product into cart', async function () {
    // Write code here that turns the phrase above into concrete actions
    const homePage = new HomePage(this.driver)
    const welcomePage = new WelcomePage(this.driver)

    await welcomePage.clickUSLinkImage()
    await homePage.addProductIntoCart()
  });

  When('User navigate to cart page', async function () {
    const homePage = new HomePage(this.driver)
    await homePage.clickOnGoToCartButton()
  });

  When('User navigate to the Checkout page', async function() {
    const cartPage = new CartPage(this.driver)
    await cartPage.clickOnCheckOutButton()
  })
  
  Then('I entered into the home page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });