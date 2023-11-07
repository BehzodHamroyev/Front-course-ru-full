const profileId = '';
describe('User visits profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`profile/${data?.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('And the profile is loaded successfully', () => {
    cy.getByTestId('ProfilePage').should('exist');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'aziza');
  });

  it('And edits it', () => {
    cy.updateProfile('aziza', 'lazizoda');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'aziza');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'lazizoda');
  });
});
