const {test, expect} = require ('@playwright/test'); //import required libraries
const {HomePage} = require ('../pages/HomePage');
const {LoginPage} = require ('../pages/LoginPage');
const {CategoryPage} = require ('../pages/CategoryPage');
const {ProductPage} = require ('../pages/ProductPage')
 
//Write Test
test.only ('@regression TC05_AddToWishlist', async ({page}) =>
{
    const home = new HomePage (page);
    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();

    const login = new LoginPage (page);
    await login.login('affanqureshi@hotmail.com', '123456');

    await page.waitForTimeout(2000);

    await home.openAllLaptopsAndNotebooks();

    const category = new CategoryPage (page);
    await page.waitForTimeout(2000);
    await category.openProductByName();

    const product = new ProductPage (page);
    product.addToWishList();

    await product.expectSuccessContains(expect, 'Success');

});