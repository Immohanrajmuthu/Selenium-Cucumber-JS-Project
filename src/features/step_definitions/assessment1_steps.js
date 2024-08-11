const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert'); 
const HomePage = require('../../test/pages/HomePage');
const WelcomePage = require('../../test/pages/WelcomePage');
const LoginPage = require('../../test/pages/LoginPage');
const CartPage = require("../../test/pages/CartPage");

  Given('User is in the best buy home page', async function () {
    await this.driver.get('https://www.bestbuy.com')
    const welcomePage = new WelcomePage(this.driver)
    await welcomePage.clickUSLinkImage()
  }); 

  When('User search a {word} from the home page', async function (product) {
    const homePage = new HomePage(this.driver)
    await homePage.closeSurveyWindow()
    await homePage.searchProduct(product)
    // Add a validation
  });

  When('User add a product into cart', async function () {
    const homePage = new HomePage(this.driver)
    await homePage.addProductIntoCart()
  });

  When('User navigate to cart page', async function () {
    const homePage = new HomePage(this.driver)
    await homePage.clickOnGoToCartButton()
    // Add validation for cart page
  });

  When('User click on the Checkout button in the Cart page', async function() {
    const cartPage = new CartPage(this.driver)
    await cartPage.clickOnCheckOutButton()
  })
  
  Then('User redirected to the Login page', async function () {
    const loginPage = new LoginPage(this.driver)
    let title = await loginPage.getTitle()
    assert.equal(title, 'Sign In to Best Buy', "Validation failed")
  });