/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.spireworks.org/users/sign_in')    
  })

  it('should enter email password and login ', () => {
    cy.get('#spire-user-auth-form #__BVID__13').type('jsward.17@gmail.com')
    cy.get('#spire-user-auth-form #__BVID__14').type('hhib2mci1713!!')
    cy.get('#spire-user-auth-form button').click()
  })
})
