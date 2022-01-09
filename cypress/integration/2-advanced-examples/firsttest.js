describe('First TestSuite', () => {

    it('Verify Title of Webpage-positive', () => 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
    })
 // it('Verify Title of Webpage-negative', () => 
  //  {
  //  cy.visit('https://demo.nopcommerce.com/')
  //  cy.title().should('eq','nopCommerce store')
 //   })
  })