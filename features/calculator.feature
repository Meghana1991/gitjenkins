Feature: Simple Calculator Operations in Landing page

@testcalculator
Scenario: Add two numbers
    Given the calculator is initialized
    When I add 2 and 3
    Then the result should be 5 
    
