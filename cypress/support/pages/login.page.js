class LoginPage {
  // 1. Elementos (Getters)
  get inputEmail() { return cy.get('#email') } // Altere conforme o seu localhost
  get inputPassword() { return cy.get('#password') }
  get btnSubmit() { return cy.get('button[type="submit"]') }
  get alertMessage() { return cy.get('.alert') }

  // 2. Ações (Métodos)
  acessar() {
    cy.visit('/');
  }

  preencherEmail(email) {
    this.inputEmail.clear().type(email);
  }

  preencherSenha(senha) {
    this.inputPassword.clear().type(senha);
  }

  clicarEntrar() {
    this.btnSubmit.click();
  }

  validarMensagemErro(mensagem) {
    this.alertMessage.should('be.visible').and('contain', mensagem);
  }
}

export default new LoginPage();