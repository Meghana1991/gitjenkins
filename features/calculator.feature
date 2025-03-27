Feature: Simple Calculator Operations.

@mul
Scenario: Multiply two numbers
    Given the calculator is initialized
    When I mul 2 and 3
    Then the result should be 6