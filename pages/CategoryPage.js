class CategoryPage
{
    //constructor
    constructor (page)
    {
        this.page = page;
    }

    async openProductByName ()
    {
        await this.page.getByText('HP LP3065', { exact: true }).click();
    }
}

module.exports = {CategoryPage};