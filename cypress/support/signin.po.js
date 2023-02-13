export class SignIn{

    static navigateToSignIn =() => cy.visit('localhost:3000/user/login')
    static email =() => cy.get('[data-cy="email"]')
    static password =() => cy.get('data-cy=["password"]')
    static submitButton =() => cy.get('[type="submit"]')



}