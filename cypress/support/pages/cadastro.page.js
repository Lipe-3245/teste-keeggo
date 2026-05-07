class CadastroPage {
  get inputNome() {
    return cy.get("#first-name");
  }
  get inputSobreNome() {
    return cy.get("#last-name");
  }
  get inputEndereco() {
    return cy.get("#address");
  }
  get inputNumero() {
    return cy.get("#number");
  }
  get inputCep() {
    return cy.get("#cep");
  }
  get inputTelefone() {
    return cy.get("#phone");
  }
  get inputEmail() {
    return cy.get("#email");
  }

  //Ações
  acessarPagina() {
    cy.visit("http://localhost:3000/checkout.html");
  }

  preencherFormulario(nome, sobreNome, endereco, numero, cep, telefone, email) {
    this.inputNome.type(nome);
    this.inputSobreNome.type(sobreNome);
    this.inputEndereco.type(endereco);
    this.inputNumero.type(numero);
    this.inputCep.type(cep);
    this.inputTelefone.type(telefone);
    this.inputEmail.type(email);
  }
}

export default new CadastroPage();
