import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is NOT authorized', () => {
    it('Go to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Go to opens profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('The transition opens a non-existent route', () => {
      cy.visit('/fasfasfasf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('User is authorized', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Go to opens profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('The transition opens a page with a list of articles', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
