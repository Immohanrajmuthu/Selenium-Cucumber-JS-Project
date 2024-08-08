const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert'); 
const HomePage = require('../../test/pages/HomePage')
// const { driver } = require('../support/hooks');

  Given('I am in the Login page', async function () {
    await this.driver.get('https://www.bestbuy.com')
    let homePage = new HomePage(this.driver)
    await homePage.navigateToLoginPage()
  }); 

  When('I enter valid credentials', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('I entered into the home page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });