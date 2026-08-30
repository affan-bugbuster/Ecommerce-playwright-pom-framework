const {test, expect} = require ('@playwright/test'); //import required libraries
const {HomePage} = require ('../pages/HomePage');
const {CategoryPage} = require ('../pages/CategoryPage');
const {ProductPage} = require ('../pages/ProductPage');
const {LoginPage} = require ('../pages/LoginPage');
const {CheckoutPage} = require ('../pages/CheckoutPage');

test ('@regression TC04_CompletePurchase', async ({page}) =>
{
    const home = new HomePage (page);
    await home.goto();
    await home.openAllLaptopsAndNotebooks();

    const category = new CategoryPage (page);
    await category.openProductByName();

    const product = new ProductPage (page);
    const deliveryDate = ProductPage.buildISODatePlusDays(5);
    await product.setDeliveryDateISO(deliveryDate);
    await product.addToCart();

    await home.goToCheckout();

    const checkout = new CheckoutPage (page);
    await checkout.clickLoginPage();

    const login = new LoginPage (page);
    await login.login('affanqureshi@hotmail.com', '123456');

    await checkout.selectShippingAddressByIndex(1);
    await checkout.continueShipping();
    await checkout.continuePayment();
    await checkout.confirmOrder();

    await expect(checkout.orderPlacedHeading).toBeVisible();
});