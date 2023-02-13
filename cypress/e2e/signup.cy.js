describe('SignUp', () => {
    let email;
  
    beforeEach(() => {
      SignUp.navigateToSignUp();
    });
  
    it('should not allow the user to sign up with an already registered email', () => {
      email = `testuser${new Date().getTime()}@example.com`;
  
      SignUp.username().type('TestUser');
      SignUp.email().type(email);
      SignUp.password().type('password');
      SignUp.submitButton().click();
  
      cy.url().should('include', 'https://next-realworld.vercel.app/user/register');
      cy.get('.error-message').should('be.visible').and('contain', 'email is already taken');
    });
  
    it('successfull registration', () => {
      email = `testuser${new Date().getTime()}@aryalhari86@gmail.com`;
      SignUp.username().type('TestUser');
      SignUp.email().type(email);
      SignUp.password().type('password');
      SignUp.submitButton().click();
  
      cy.url().should('include', 'https://next-realworld.vercel.app/?follow=HARI123');
    });
  });
  