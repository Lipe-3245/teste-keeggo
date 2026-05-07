

class LoginPage {
  // 1. Elementos (Getters)
  get inputEmail() { return cy.get('#email') } // Altere conforme o seu localhost
  get inputPassword() { return cy.get('#password') }
  get btnSubmit() { return cy.get('button[type="submit"]') }
  get alertMessage() { return cy.get('.alert') }
  get minhaContaLink() { return cy.get('#account-link') }

  // 2. Ações (Métodos)
  acessar() {
    cy.visit('/');
    cy.wait(7000); // Aguarda 1 segundo para garantir que a página carregou
    

  }

  clicarMinhaConta() {
    this.minhaContaLink.click();
  }


  preencherEmail() {
    this.inputEmail.click().type('jonatasfelipefranca38@gmail.com');
  }

 preencherSenha() {
    this.inputPassword.click().type('F23072017f!@');
  }

  clicarEntrar() {
    this.btnSubmit.click();
    cy.wait(5000)
  }

  

   validarMensagemErro() {
    cy.contains('Olá, JONATAS FRANCA').should('be.visible')
  }
}

export default new LoginPage();