let productPage = require("../pages/productPage");

//let lenght = productPage.getProductsListLenght();
let rndNum;

module.exports = {

   generateRandomeNumber() {
      rndNum = Math.floor(Math.random() * 6) + 1;
      return rndNum;
   }
}
