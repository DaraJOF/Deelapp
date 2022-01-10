///  <reference types="cypress" />     


describe('Create Fixed Contract', () => {
    let fixeddata;

	beforeEach( () => {
		cy.fixture("fixedrateform").then((data)=> {
			fixeddata = data;
		});
	});

    it('Create General Info', () => 
    {
        cy.login(Cypress.env("email"), Cypress.env("password"))

        cy.get(':nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p').should("be.visible")
        .click() //click on create a contract

        cy.get(':nth-child(1) > .anchor > .box').should("be.visible")
        .click() //click on fixed contract

        cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').should("be.visible")
        .type(fixeddata.contract_name) //Enter contract name

        cy.get(':nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.tax_residence)  //search contractors tax residence
        cy.get('#react-select-3-option-1-2').should("be.visible")
        .click()  //select country

        cy.get(':nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.state)  //search for state
        cy.get('#react-select-5-option-5').should("be.visible")
        .click()   //select state
        
        cy.get(':nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').should("be.visible")
        .type(fixeddata.job_title) 
        cy.get('.suggestions-option').should("be.visible")
        .click()  //select job title

        cy.get('[data-qa="selector-seniority-level"] > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.seniority_level)
        cy.get('#react-select-4-option-3').should("be.visible")
        .click() //select seniority level

        cy.get('.deel-ui__textarea-component__textarea').should("be.visible")
        .type(fixeddata.scope_of_work) //Enter scope of work
        
        const monthsInText = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const dateObj = new Date();
        const month = monthsInText[dateObj.getMonth()];
        const day = dateObj.getDate() -1;
        const year = dateObj.getFullYear();
        cy.get('.deel-ui__icon-calendar-0').click()
        cy.get('.react-calendar__navigation__label').dblclick()
        cy.get('.react-calendar__decade-view__years__year').contains(year).click()
        cy.get('.react-calendar__year-view__months__month').contains(month).click()
        cy.get('.react-calendar__month-view__days__day').contains(new RegExp("^" + day + "$", "g")).click()  //select date from date picker

        cy.get('.justify-content-end > .button').should("be.visible")
        .click()  //click next button
    })

    it('Create Payment Details', () => 
    {
        cy.get('.payment-set-controls > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.currency) 
        cy.get('#react-select-6-option-37').should("be.visible")
        .click()  //select currency

        cy.get("[name='rate']").should("be.visible")
        .type(fixeddata.payment_rate)  //Enter payment rate

        cy.get(':nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').should("be.visible")
        .type(fixeddata.payment_frequency)  //select payment frequency
        cy.get('#react-select-7-option-0').should("be.visible")
        .click()

        //cy.get('.deel-ui__stack_stretch.deel-ui__stack_align-start > .flex > label').click()  //uncheck pay ahead of weekend

        cy.get("[type='submit']").should("be.visible")
        .click()  //click next button
    })

    it('Define Dates', () => 
    {
        cy.get("[type='submit']").should("be.visible")
        .click()  //click next button
    })

    it('Create Benefits and Extras', () => 
    {
        cy.get(':nth-child(5) > .box > .flex > :nth-child(2) > .button').should("be.visible").click()
        cy.get('.textarea').should("be.visible").type("This is a test, this is a test.")  //Add special clause

        cy.get(':nth-child(6) > .button').should("be.visible").click()  //click next
    })

    it('Create Contract Compliance', () => 
    {
        cy.get('[data-qa="create-contract"]').should("be.visible").click()  //click create contract
    })

    it('Review and Sign', () => 
    {
        cy.get('.heap-fixed-client-review-sign').should("be.visible").click()  //click create contract

        cy.wait(3000)
        cy.get('.sign-contract__sign-section > .button').should("be.visible").click()  //click agree and continue

    })
})