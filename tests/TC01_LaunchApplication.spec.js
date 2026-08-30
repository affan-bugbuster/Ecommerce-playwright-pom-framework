const {test, expect} = require ('@playwright/test'); //import required libraries
const {HomePage} = require ('../pages/HomePage');
 
//Write Test

test ('@sanity @regression TC01_LaunchApplication', async ({page}) =>
{
    const home = new HomePage (page);
    
    await home.goto();
    await expect(page).toHaveTitle("Your store of fun");
});