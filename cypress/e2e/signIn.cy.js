describe('SignIn', () => {
    beforeEach(() => {
      SignIn.navigateToSignIn();
    });
  
    it('should display an error message for invalid sign-in credentials', () => {
      SignIn.email().type('invalid@example.com');
      SignIn.password().type('incorrectpassword');
      SignIn.submitButton().click();
  
      cy.url().should('include', '/user/login');
      cy.get('.error-message').should('be.visible').and('contain', 'email or password is invaid');
    });
  
    it('should redirect the user to the profile page for a successful sign-in', () => {
      SignIn.email().type('aryalhari86@gmail.com');
      SignIn.password().type('password');
      SignIn.submitButton().click();
  
      cy.url().should('include', 'https://next-realworld.vercel.app/?follow=HARI123');
    });
  });
  