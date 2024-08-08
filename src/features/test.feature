Feature: Testing Addition functionality

Scenario Outline: Scenario Outline name: Adding <num1> and <num2> makes <total>
Given First number is <num1>
When Add a second number <num2>
Then I get a correct total <total>

Examples:
|num1|num2|total|
|10|20|30|
|10|290|300|





