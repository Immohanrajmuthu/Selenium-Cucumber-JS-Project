const { By, Builder, Capabilities } = require('selenium-webdriver')
// require ('chromedriver')

const chromeDriver = function() {
    const capabilities = Capabilities.chrome()
    capabilities.set('chromeoptions')
    return new Builder().withCapabilities(capabilities).build()
}

const edgeDriver = function() {
     const capabilities = Capabilities.edge()
     capabilities.set('edgeoptions', {'w3c':false})
     return new Builder().withCapabilities(capabilities).build()
}

module.exports = {
    chromeDriver,
    edgeDriver
};

