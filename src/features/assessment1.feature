Feature: Login to the application

Scenario: Checkout workflow
Given User is in the best buy home page
When User add a product into cart
And User navigate to cart page
And User click on the Checkout button in the Cart page
Then User redirected to the Login page