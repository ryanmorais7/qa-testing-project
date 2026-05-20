describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('envia o formulário com sucesso', () => {
    const longtext = Cypress._.repeat('asdfghjklfndfnvdfvb', 10)

    cy.get('#firstName').type('Ryan')
    cy.get('#lastName').type('Morais')
    cy.get('#email').type('ryan@email.com')
    cy.get('#open-text-area').type(longtext, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe erro ao enviar formulário vazio', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('campo telefone aceita apenas números', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  it('seleciona produto por texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona produto por valor', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona produto por índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
})