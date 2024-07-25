///<reference types="Cypress"/>

///variaveis
const url = 'https://demowebshop.tricentis.com/login';
const email = 'gleidson.berg0189@gmail.com';
const email_errado = 'gleidson_teste@gmail.com';
const senha = '123456';
const senha_errada = 'teste123';

describe('Teste Funcional de login sem preencher os campos de usuario e senha', () => {
    it('Não deve permite o login e deve ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.ico-login').click()
        cy.get('form > .buttons > .button-1').click();
        cy.contains('Login was unsuccessful. Please correct the errors and try again. No customer account found').should('be.visible')
    });
});

describe('Teste Funcional de login preenchendo senha valida e um login invalido', () => {
    it('Não deve permite o login e deve ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.ico-login').click()
        cy.get('#Email').type(email_errado)
        cy.get('#Password').type(senha)
        cy.get('form > .buttons > .button-1').click();
        cy.contains('Login was unsuccessful. Please correct the errors and try again. No customer account found').should('be.visible')
    });
});

describe('Teste Funcional de login preenchendo senha invalida e um login valido', () => {
    it('Não deve permite o login e deve ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.ico-login').click()
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha_errada)
        cy.get('form > .buttons > .button-1').click();
        cy.contains('Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect').should('be.visible')
    });
});

describe('Teste Funcional de login com dados validos e marcação na flegue "Remember me"', () => {
    it('Deve realizar o login com suceso no primeiro momento e em seguida sair do sistema e ao entra novamente conseguir logar sem precisar preencher os campo novamente' , () => {
        cy.visit(url)
        cy.get('.ico-login').click()
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha);
        cy.get('#RememberMe').check()
        cy.get('form > .buttons > .button-1').click()
        cy.get('.ico-logout').click()
        cy.get('.ico-login').click()
        cy.get('form > .buttons > .button-1').click()
        cy.contains('Log out').should('be.visible')
        ///esta sendo apresentado um bug nesse teste por conta da falha da flag e não esta salvando o nome e senha do usuario 
    });
});

describe('Teste Funcional de login com dados validos', () => {
    it('Deve realizar o login com suceso' , () => {
        cy.visit(url)
        cy.get('.ico-login').click()
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha);
        cy.get('form > .buttons > .button-1').click()
        cy.contains('Log out').should('be.visible')
    });
});