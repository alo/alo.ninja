describe('Testing alo.dev homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain my name', () => {
    cy.get('h1').contains('Álvaro Quirós');
  });

  it('should verify the color of the Projects section', () => {
    cy.get('alo-projects > h2')
      .should('have.css', 'color')
      .and('eq', 'rgb(63, 81, 181)');
  });

  it('should open a modal to confirm personal social link and close it ', () => {
    cy.get('alo-description > .mat-card > .mat-card-actions > alo-social-links ')
      .find('.mat-icon-button > .mat-button-wrapper > .fa-instagram')
      .click()
      .get('alo-confirm-dialog')
      .should('exist')
      .get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper')
      .should('exist')
      .contains('¡Vale!')
      .get('button.mat-button > .mat-button-wrapper')
      .contains('No, gracias')
      .click()
      .get('alo-confirm-dialog')
      .should('not.exist');
  });
});
