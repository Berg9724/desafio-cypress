///<reference types="Cypress"/>

///variaveis
const url = 'https://demowebshop.tricentis.com/login';
const email = 'gleidson.berg0143@gmail.com';
const senha = '123456';
const nome = 'Gleidson';
const sobrenome = 'Tavares';
const produto01 = 'Health Book'
const produto02 = 'Music 2'


describe('Teste Funcional pesquisa de produto sem cadastro e sem marcar a flag de termo de serviço ao tentar finalizar a compra', () => {
    it('Deve permitir colocar os produtos no carrinho mas não finalizar a compra deve ser aprsentado uma mensagem solicitando a marcação da flag' , () => {
        cy.visit(url)
        cy.get('.top-menu > :nth-child(2)').click()
        cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('#add-to-cart-button-72').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
        cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto01)
        cy.get('form > .button-1').click()
        cy.get('.product-item > .picture > a > img').click()
        cy.get('#add-to-cart-button-22').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto02)
        cy.get('form > .button-1').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#checkout').click()
        cy.get('p').should('contain','Please accept the terms of service before the next step.')
    });
});

describe('Teste Funcional pesquisa de produto sem cadastro e marcando a flag de termo de serviço a0 finalizar a compra ', () => {
    it('Deve permitir colocar os produtos no carrinho e marcar a flag mas ao finalizar a compra deve ser solicitado login e senha' , () => {
        cy.visit(url)
        cy.get('.top-menu > :nth-child(2)').click()
        cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('#add-to-cart-button-72').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
        cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto01)
        cy.get('form > .button-1').click()
        cy.get('.product-item > .picture > a > img').click()
        cy.get('#add-to-cart-button-22').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto02)
        cy.get('form > .button-1').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.contains('Welcome, Please Sign In!').should('be.visible')
    });
});

describe('Teste Funcional pesquisa de produto sem cadastro e marcando a flag de termo de serviço ', () => {
    it('Deve permitir colocar os produtos no carrinho e marcar a flag mas ao finalizar a compra deve ser solicitado login e senha' , () => {
        cy.visit(url)
        cy.get('#Email').type(email)
        cy.get('#Password').type(senha)
        cy.get('form > .buttons > .button-1').click()
        cy.get('.top-menu > :nth-child(2)').click()
        cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('#add-to-cart-button-72').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
        cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto01)
        cy.get('form > .button-1').click()
        cy.get('.product-item > .picture > a > img').click()
        cy.get('#add-to-cart-button-22').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('#small-searchterms').type(produto02)
        cy.get('form > .button-1').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.content').should('contain','The product has been added to your shopping cart')
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.contains('Checkout').should('be.visible')
    });
});