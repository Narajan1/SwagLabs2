const helper = require("../support/helper");
let index = helper.generateRandomeNumber();

class ProductPage {

    get CartBtn() {
        return cy.get("#shopping_cart_container");
    };

    get shoppingCartBadge() {
        return cy.get('#shopping_cart_container span');
    };

    get ProductsContainer() {
        return cy.get(".inventory_container");
    };

    getAddToCartBtn(index) {
        return cy.get(`.inventory_item:nth-child(${index}) button`);
    };

    /*getProductName(index) {
        let text;
        let item = cy.get(`.inventory_item:nth-child(${index}) .inventory_item_name`);
        text = Cypress.$(item).text();
        return text;
    };*/

    openCartPage() {
        this.CartBtn.click();
    };

    selectRandomeProduct() {
        this.getAddToCartBtn(index).click();
    };

    getProductsListLenght() {
        let container = this.ProductsContainer;
        return container.length;
    }
}
module.exports = new ProductPage();
