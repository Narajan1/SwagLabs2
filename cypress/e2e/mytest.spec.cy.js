/// <reference types="cypress" />
const data = require("../fixtures/myData.json")
const cartPage = require("../pages/cartPage");
const productPage = require("../pages/productPage");
const constants = require("../support/constants");

describe('example to-do app', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('displays two todo items by default', () => {

    cy.url().should('include', constants.url);
    cy.login(data.username, data.password);
    cy.title().should('eq', constants.title);
    //cy.log(cy.fixture().its('username'));

    productPage.selectRandomeProduct();
    productPage.shoppingCartBadge.scrollIntoView();
    productPage.shoppingCartBadge.should("contain.text", "1");
    productPage.openCartPage();
    cy.contains(constants.cartPageTitle).should("be.visible");
    expect(cartPage.RemoveBtn).to.be.exist;
    cartPage.AddedProductsContainersArray.its('length').should('be.gt', 0);
    //expect(productPage.getProductName()).to.be.equal(cartPage.AddedProductsName);
    cartPage.RemoveProduct();
    cartPage.RemoveBtn.should('not.exist');

    cartPage.Logout();
    cartPage.imgFromLoginPage.should('be.visible');
  })
})
