Feature: Email and Mobile sign up

Scenario: Verify Email and Mobile number sign up section in the 'Deal of the day' page
    Given User is in the "Deal of the Day: Electronics Deals - Best Buy" page
    When User navigate to the "Get the Deal of the Day delivered to you." section
    Then Email sign up button is displayed
    And Mobile number signup button is displayed