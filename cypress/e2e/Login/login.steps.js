import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/login.page";

Given("que eu acesso a página principal", () => {
  LoginPage.acessar();
});

When("eu insiro o e-mail {string}", (email) => {
  LoginPage.preencherEmail(email);
});

When("a senha {string}", (senha) => {
  LoginPage.preencherSenha(senha);
});

When("clico no botão de entrar", () => {
  LoginPage.clicarEntrar();
});

Then("devo ver uma mensagem de erro {string}", (mensagem) => {
  LoginPage.validarMensagemErro(mensagem);
});

Then("devo ser redirecionado para a home", () => {
  cy.url().should('eq', 'http://localhost:3000/home');
});