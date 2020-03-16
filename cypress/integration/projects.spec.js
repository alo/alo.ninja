/// <reference types="Cypress" />

describe('Testing alo.dev page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should contain the title', () => {
    cy.get('h1')
      .contains('Mis últimos proyectos')
      .should('have.css', 'color')
      .and('eq', 'rgb(63, 81, 181)');
  });
});
