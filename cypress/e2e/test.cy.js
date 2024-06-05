describe('Index', () => {
beforeEach(() => {
  cy.visit('/');
})
  it('should add user', () => {
    cy.get('#form').click()
    cy.get('#firstName').type('Mara')
    cy.get('#lastName').type('Abba')
    cy.get('#email').type('mara@gmail.com')
    cy.get('#save').click()
})

  it.only('should click on radio-button',()=> {
    cy.get('[type="radio"]').check('clientes').click()
})
})