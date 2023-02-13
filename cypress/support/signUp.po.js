export class SignUp{

    static navigateToSignUp =() => cy.visit('localhost:3000/user/register')
    static username =() => cy.visit('[data-cy="user-name"]')
    static email =() => cy.get('[data-cy=]"email"')
    static password =() => cy.visit('[data-cy=["password"]') 
    static submitButton =() => cy.visit('[type="submit"]')



}