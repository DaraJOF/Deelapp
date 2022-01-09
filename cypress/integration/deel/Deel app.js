///  <reference types="cypress" />     

describe('Locate Elements', () => {

    it('Create Fixed Contract', () => 
    {
        cy.visit("https://app.deel.training/login")
        cy.get("#root > div > div.login-container.container > div:nth-child(4) > div > div > div > form > div.flex.flex-dir-col > div.input-container > div.input > input").type("faithlohla@gmail.com") //Enter Email
        cy.get("[type='password']").type('Oluwadara_97') //Enter password
        cy.get("#root > div > div.login-container.container > div:nth-child(4) > div > div > div > form > button > div").click() //click login button
        cy.wait(3000)
        cy.get("body > div.fade.popup.whats-new-popup.modal.show > div > div > div > div.whats-new-slides > button > div > div > svg").click() //close the popup menu after page loads
        cy.get("#root > div > div > div.mobile-header > div > button").click()  //click on the hamburger button
        cy.get(":nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p").click() //click on create a contract
        cy.get("#root > div > div > div:nth-child(4) > div > div.row > div:nth-child(1) > a > div > div").click()
        cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type('Test Contract')
        //cy.get("#root > div > div > div:nth-child(4) > div > form > div.box.mb-10.undefined > div > div.deel-ui__stack.deel-ui__stack_vertical.deel-ui__stack_with-spacing > div > div > div > div > div > div.deel-ui__select__value-container.css-1hwfws3")
        //.select('Canada')
        //.should('have.value','Canada')
        cy.get("[name='jobTitle']").type('QA Analyst') //Enter job title
    })
})