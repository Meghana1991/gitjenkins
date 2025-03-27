const { Given, When, Then } = require('@cucumber/cucumber')
const Calculator = require('../calculator')

let calculator;
let result;

const assert = require('assert')

Given('the calculator is initialized', function () {
    calculator = new Calculator()
})

Then('the result should be {int}', function (expectedResult) {
    // Then('the result should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(result, expectedResult)
});


When('I add {int} and {int}', function (a, b) {
    result = calculator.add(a, b)
})

When('I mul {int} and {int}', function (a, b) {
    result = calculator.mul(a, b)
})
