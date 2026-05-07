import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../pages/cadastro.page";

// Carregar a massa de dados antes de cada teste
Before(() => {
  cy.fixture("usuario").as("dados");
});

Given("que eu acesso a pagina de cadastro", () => {
  CadastroPage.acessarPagina();
});
