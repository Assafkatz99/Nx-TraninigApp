describe('my-new-app: MyNewComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mynewcomponent--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyNewComponent!');
  });
});
