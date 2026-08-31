class CategoryPage
{
    //constructor
    constructor (page)
    {
        this.page = page;
    }

    async openProductByName ()
    {
        await this.page.locator("//a[normalize-space()='HP LP3065']").click();
    }
}

module.exports = {CategoryPage};