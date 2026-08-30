const {test, expect} = require ('@playwright/test'); //import required libraries
const {HomePage} = require ('../pages/HomePage');
const {CategoryPage} = require ('../pages/CategoryPage');
const {ProductPage} = require ('../pages/ProductPage');

test ('@sanity @regression TC03_AddToCart', async ({page}) =>
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
    await product.expectSuccessContains(expect, 'Success');
});