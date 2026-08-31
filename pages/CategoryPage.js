class CategoryPage
{
    //constructor
    constructor (page)
    {
        this.page = page;
    }

    async openProductByName ()
    {
        await this.page.locator("div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) h4:nth-child(1) a:nth-child(1)").click();
    }
}

module.exports = {CategoryPage};