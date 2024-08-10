const { Given, When, Then } = require("@cucumber/cucumber");
When('I test parameter {string}', function (param) {
    console.log("Parameter received: " + param);
});
