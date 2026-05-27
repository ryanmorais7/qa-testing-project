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
  
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
  })
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfservice => {
        cy.wrap(typeOfservice)
        .check()
        .should('be.checked')
      })
    })
    
    it('marca ambos checkboxes, depois desmarca o último', () => {
      cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', () => {
      cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function ($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        })  
      })
     
      it('seleciona um arquivo simulando drag-and-drop', () => {
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
          }) 
        })

        it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
          cy.fixture('example.json').as('sampleFile')
          cy.get('#file-upload')
            .selectFile('@sampleFile')
            .should(input => {
              expect(input[0].files[0].name).to.equal('example.json')
            }) 
          })
        it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
          cy.contains('a', 'Política de Privacidade')
             .should('have.attr', 'href', 'privacy.html')
             .and('have.attr', 'target', '_blank')
        })

        it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {  
          cy.contains('a', 'Política de Privacidade')
            .invoke('removeAttr', 'target')
            .click()
          cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible') 
        })
})
