# language: pt
Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que eu acesso a página principal
    Quando eu insiro o e-mail "admin@teste.com"
    E a senha "123456"
    E clico no botão de entrar
    Então devo ser redirecionado para a home

  Cenário: Credenciais inválidas
    Dado que eu acesso a página principal
    Quando eu insiro o e-mail "invalido@teste.com"
    E a senha "senha_errada"
    E clico no botão de entrar
    Então devo ver uma mensagem de erro "Usuário não encontrado"