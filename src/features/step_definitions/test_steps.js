const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert')

  Given('First number is {int}', function (int) {
    this.num = int
  });

  When('Add a second number {int}', function (int) {
    this.total = this.num + int
  });

  Then('I get a correct total {int}', function (int) {
    assert(this.total===int, "Expected: "+int+" Actual:"+this.total)
  });


