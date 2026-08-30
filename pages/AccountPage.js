class AccountPage
{
    //constructor
    constructor (page)
    {
        this.page = page;

        //locators
        this.MyAccountHeading = page.locator("//h1[normalize-space()='My Account']");
    }

    async isMyAccountVisible()
    {
        return await this.MyAccountHeading.isVisible();
    }
}

module.exports = {AccountPage};