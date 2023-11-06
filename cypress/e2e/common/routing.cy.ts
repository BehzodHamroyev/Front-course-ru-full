import { login } from '../../support/commands/login';
import { selectByTestId } from '../../helper/selectByTestId';

describe('Routing', () => {
  describe('with out authentification', () => {
    it('Innitial main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('when user change his location from main page to profile page ', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('incorrect path ', () => {
      cy.visit('/fasfasfasf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('with authentification', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });
    it('when user done login then he/she be on profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('when user change their location to article page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
