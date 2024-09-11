const Helper = require('./helper/Helper')
const {By, until} = require('selenium-webdriver')

class VideoModalPage{
    #ImageButtonLink
    #VideoModal
    #PlayButton
    #Player
    #ResumeButton
    #PauseButton
    #CloseButton
    #driver
    #helper
    #OuterFrame
    #InnerFrame

    constructor(driver){
        this.#driver = driver
        this.#helper = new Helper(driver) // no need to create object here

        this.#ImageButtonLink = By.className('')
        this.#VideoModal = By.id('')
        this.#PlayButton = By.id('')
        this.#Player = By.id('')
        this.#PauseButton = By.className('')
        this.#ResumeButton = By.id('')
        this.#CloseButton = By.xpath('')

        this.#OuterFrame = By.xpath('')
        this.#InnerFrame = By.xpath('')

    }

    async getTitle(){
        await this.#driver.wait(until.elementLocated(this.#ImageButtonLink))
        return await this.#driver.getTitle()
    }

    async clickOnVideoImageButton(){
        try {
            let videoImageButtons = await this.#driver.findElement(this.#ImageButtonLink)
            await this.#helper.moveAndClickOnElement(videoImageButtons[1])
        } catch (error) {
            console.log('Video image button is not clicked!   ' +error)
        }

    }

    async verifyPlayButtonVisibility(){ // this verification method should be avoided here

    }
}

module.exports = VideoModalPage
