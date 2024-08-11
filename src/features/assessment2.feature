Feature: Video and Modal window validation

Scenario Outline: Validate the 
    Given User is in the best buy home page
    When User search a <product> from the home page
    And User add a product into cart
    And User navigate to cart page
    And User click on the Checkout button in the Cart page
    Then User redirected to the Login page

Examples:
| product |
| Computer |
| Phone |