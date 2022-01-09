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
        cy.get(":nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p").click() //click on create a contract
        cy.get(':nth-child(1) > .anchor > .box').click() //click on fixed contract
        cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type(fixeddata.contract_name)
        //cy.get("#root > div > div > div:nth-child(4) > div > form > div.box.mb-10.undefined > div > div.deel-ui__stack.deel-ui__stack_vertical.deel-ui__stack_with-spacing > div > div > div > div > div > div.deel-ui__select__value-container.css-1hwfws3")
        //.select('Canada')
        //.should('have.value','Canada')
        cy.get("[name='jobTitle']").type(fixeddata.job_title) //Enter job title
    })
})