context('Chat App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays the header', () => {
    cy.get('.header h1').should('be.visible')
    cy.get('.header button').should('be.visible')
  })

  it('creates a new conversations', () => {
    cy.get('.header button').click()
    cy.get('.chats').children().should('have.length', 1)

    cy.get('.header button').click()
    cy.get('.chats').children().should('have.length', 2)

    cy.get('.header button').click()
    cy.get('.chats').children().should('have.length', 3)
  })

  it('selects a conversation', () => {
    let timestamp

    cy.get('.header button').click().wait(1000) // ensure timestamp changes
    cy.get('.header button').click()
    cy.get('.header button').click()
    cy.get('.conversation .message__timestamp').first().invoke('text').then((text) => timestamp = text)

    cy.get('.chat').first().click()
    cy.get('.chat').first().should('have.class', 'chat--active')

    cy.get('.conversation .message__timestamp').first().invoke('text').should((text) => {
      expect(text).not.to.eq(timestamp)
    })
  })

  it('deletes a conversation', () => {
    const stub = cy.stub()
    stub.onFirstCall().returns(false)
    stub.onSecondCall().returns(true)

    cy.on('window:confirm', stub)

    cy.get('.header button').click()
    cy.get('.chats').children().should('have.length', 1)

    cy.get('.chat').first().get('.chat__toggle').click()
    cy.get('.chats').children().should('have.length', 1)

    cy.get('.chat').first().get('.chat__toggle').click()
    cy.get('.chats').children().should('have.length', 0)
  })

  it('displays a conversation', () => {
    cy.get('.header button').click()

    cy.get('.conversation__body').should('be.visible')
    cy.get('.conversation__body').children().should('have.length', 1)
    cy.get('.conversation__body .message').first().get('.message__message').contains('Welcome')

    cy.get('.conversation__form').should('be.visible')
    cy.get('.conversation__form').children().should('have.length', 1)
  })

  it('displays messages', () => {
    const message = 'Hello world'

    cy.get('.header button').click()
    cy.get('.conversation__form').get('input').type(message + '{enter}')

    cy.get('.conversation__body').children().should('have.length', 3)
    cy.get('.conversation__body .message--agent').should('have.length', 2)
    cy.get('.conversation__body .message--guest').should('have.length', 1)
  })
})
