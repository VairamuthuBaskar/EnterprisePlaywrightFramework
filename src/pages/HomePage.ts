import { Page, expect } from "@playwright/test";

export default class HomePage 
{

    // private readonly serviceTitleLocator = "Service";
    private readonly serviceTitleLocator = "Recently Viewed | Contacts | Salesforce";
    private readonly contactTextLocator = "(//*[@title='Contacts'])[1]";

    constructor(private page: Page) 
    {
    }

    async expectServiceTitleToBeVisible() 
    {
        // await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({ timeout: 15000 });
        await expect(this.page.getByTitle(this.contactTextLocator)).toBeVisible({ timeout: 15000 });
    }
}