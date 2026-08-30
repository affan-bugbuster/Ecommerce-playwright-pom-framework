const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { AffiliatePage } = require('../pages/AffiliatePage');

test ('@regression TC06_AddAffiliate', async ({ page }) => 
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const affiliate = new AffiliatePage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();

    await login.login('affanqureshi@hotmail.com', '123456');
  
    await affiliate.openFromFooter();
    await affiliate.fillAffiliateForm({
        company: 'CloudBerry',
        website: 'cloudberry.services',
        taxId: '12345',
        payeeName: 'Sid',
    });
    await affiliate.submit();

    await affiliate.expectSuccessContains(expect, 'Success');
});