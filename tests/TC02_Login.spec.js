const {test, expect} = require ('@playwright/test'); //import required libraries
const {HomePage} = require ('../pages/HomePage');
const {LoginPage} = require ('../pages/LoginPage');
const {AccountPage} = require ('../pages/AccountPage');

const dataSet = JSON.parse(JSON.stringify(require ("../utils/CloudBerryStoreTestData.json")));
const users = dataSet.Sheet1;
 
//Write Test
for (const data of users)
{
    test (`@sanity @regression @datadriven TC02_Login-${data.username}`, async ({page}) =>
    {
        const home = new HomePage (page);
        await home.goto();
        await home.openMyAccount();
        await home.clickLogin();

        const login = new LoginPage (page);
        await login.login(data.username, data.password);

        const account = new AccountPage (page);
        await expect(account.MyAccountHeading).toBeVisible();
    });
}