///  <reference types="cypress" />     
//to get suggesions when entering a command

describe('Locate Elements', () => {

    it('Verify types of locators', () => 
    {
      cy.visit("https://demo.nopcommerce.com/")  //opens url of application
      cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search for product in serach panel
      cy.get("[type='submit']").click()  //clicks on search button
      cy.get(".product-box-add-to-cart-button").click() //click on add to cart button
      cy.get("#product_enteredQuantity_4").clear().type('2')  //clear existing quantity in the text box and put in a new value
      cy.get(".add-to-cart-button").click() //add to cart after entering qty
      cy.wait(5000) //wait 5secs before clicking buton
      cy.get("#topcartlink > a > span.cart-label").click() //click shopping cart button
      cy.wait(3000) //wait 3secs
      cy.get(".product-unit-price").contains('$1,800.00')  //validate unit price 

    })
})