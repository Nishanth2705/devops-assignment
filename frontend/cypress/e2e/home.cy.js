describe('Home Page', () => {
  it('Loads message from backend', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Message from backend');
  });
});
