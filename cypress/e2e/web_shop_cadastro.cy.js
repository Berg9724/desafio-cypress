///<reference types="Cypress"/>

///variaveis
const url = 'https://demowebshop.tricentis.com/login';
const email = 'gleidson.berg0189@gmail.com';
const senha = '123456';
const nome = 'Gleidson';
const sobrenome = 'Tavares';


describe('Teste Funcional de cadastro sem preencher o mome do usuario', () => {
    it('Não deve realizar o cadastro com suceso e ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#LastName').type(sobrenome)
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha)
        cy.get('#ConfirmPassword').type(senha)
        cy.get('#register-button').click()
        cy.contains('First name is required.').should('be.visible')
    });
});

describe('Teste Funcional de cadastro sem preencher o sobrenome do usuario', () => {
    it('Não deve realizar o cadastro com suceso e ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(nome)
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha)
        cy.get('#ConfirmPassword').type(senha)
        cy.get('#register-button').click()
        cy.contains('Last name is required.').should('be.visible')
    });
});

describe('Teste Funcional de cadastro sem preencher o email do usuario', () => {
    it('Não deve realizar o cadastro com suceso e ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(nome)
        cy.get('#LastName').type(sobrenome)
        cy.get('#Password').type(senha)
        cy.get('#ConfirmPassword').type(senha)
        cy.get('#register-button').click()
        cy.contains('Email is required.').should('be.visible')
    });
});

describe('Teste Funcional de cadastro sem preencher a senha do usuario', () => {
    it('Não deve realizar o cadastro com suceso e ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(nome)
        cy.get('#LastName').type(sobrenome)
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha)
        cy.get('#register-button').click()
        cy.contains('Password is required.').should('be.visible')
        
    });
});

describe('Teste Funcional de cadastro sem preencher a senha de confirmação do usuario', () => {
    it('Não deve realizar o cadastro com suceso e ser apresentado uma mensagem de erro' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(nome)
        cy.get('#LastName').type(sobrenome)
        cy.get('#Email').type(email)
        cy.get('#ConfirmPassword').type(senha)
        cy.get('#register-button').click()
        cy.contains('Password is required.').should('be.visible')
        cy.contains('The password and confirmation password do not match.').should('be.visible')
    });
});

describe('Teste Funcional de cadastro utilizandoo dados validos', () => {
    it('Deve realizar o cadastro com suceso' , () => {
        cy.visit(url)
        cy.get('.new-wrapper > .buttons > .button-1').click();
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(nome)
        cy.get('#LastName').type(sobrenome)
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha)
        cy.get('#ConfirmPassword').type(senha)
        cy.get('#register-button').click()
        cy.contains('Your registration completed').should('be.visible')
    });
});



