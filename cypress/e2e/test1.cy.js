/// <reference types="cypress" />

it('Go to google', () => {
    cy.visit('https://google.com')
    cy.get('button').contains('Hyväksy kaikki').click()
    cy.get('input[type="text"]').type('cypress{enter}')
})

