describe('My First Test', () => {
    // it('Does not do much!', () => {
    //   expect(true).to.equal(true)
    // })
    // it('Visits the Kitchen Sink', () => {
    //     cy.visit('https://example.cypress.io')
    //   })
    // it('clicking "type" navigates to a new url', () => {
    // cy.visit('https://example.cypress.io')

    // cy.contains('type').click()

    // // Should be on a new URL which includes '/commands/actions'
    // cy.url().should('include', '/commands/actions')
    // })

    it('clicking "type" navigates to a new url', () => {
    cy.visit('https://toodledid.herokuapp.com/')
    cy.get('#auth')
    .should('be.visible')
    .click()
    // cy.url()
    // .should('be.equal', 'https://example.com/login')


    // https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write
    cy.get('#email')
    .should('be.visible')
    .type(ENV['email'])
    cy.get('input[type="password"]')
    .should('be.visible')
    .type(ENV['password'])
  // cy.get('button[type="submit"]')
  cy.get('input[name="authorized"]')
    .should('be.visible')
    .click()
  })

    // it('clicking "type" navigates to a new url', () => {
    // cy.visit('http://local.com:4567/')

    // oh it's the same page
    // https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=gnhmiObN9q0bA&scope=basic%20tasks%20write
    // https://glebbahmutov.com/blog/cypress-second-tab/ get into another tab

    // cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    // cy.url().should('include', '/commands/actions')
    // })
})
