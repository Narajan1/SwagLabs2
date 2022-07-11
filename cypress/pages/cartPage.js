class CartPage {

    get LogoutDropdownBtn() {
        return cy.get("#react-burger-menu-btn");
    };

    get LogoutBtn() {
        return cy.get("#logout_sidebar_link");
    };

    get AddedProductsContainersArray() {
        return cy.get(".cart_item");
    };

    /*get AddedProductsName() {
        let item = cy.get(".cart_item .inventory_item_name");
        let text = Cypress.$(item).text();
        return text;
    };*/

    get RemoveBtn() {
        return cy.get('.item_pricebar button')
    }

    get imgFromLoginPage() {
        return cy.get(".bot_column");
    }

    RemoveProduct() {
        this.RemoveBtn.click();
    }

    clickOnLogoutDropdownBtn() {
        this.LogoutDropdownBtn.click();
    };

    Logout() {
        this.LogoutBtn.click({ force: true });
    };
}
module.exports = new CartPage();
