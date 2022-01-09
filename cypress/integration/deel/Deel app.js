///  <reference types="cypress" />     


describe('Create Fixed Contract', () => {
    let fixeddata;

	beforeEach(function () {
		cy.fixture("fixedrateform").then((data)=> {
			fixeddata = data;
		});
        cy.login(Cypress.env("email"), Cypress.env("password"))
	});

    it('Create Fixed Contract', () => 
    {
        cy.get(":nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p").should("be.visible")
        .click() //click on create a contract

        cy.get(':nth-child(1) > .anchor > .box').should("be.visible")
        .click() //click on fixed contract

        cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').should("be.visible")
        .type(fixeddata.contract_name)

        cy.get(':nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.tax_residence)
        
        cy.get(':nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').should("be.visible")
        .type(fixeddata.job_title) //Enter job title
        
        cy.get('.deel-ui__textarea-component__textarea').should("be.visible")
        .type(fixeddata.scope_of_work) //Enter scope of work
    })
})