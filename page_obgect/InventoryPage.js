import { expect } from "@playwright/test";

export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.primaryHeader = page.locator('[data-test="primary-header"]');
        this.headerLabel = this.primaryHeader.locator('text=Swag Labs');
        
    };

    

    async verifyInventoryPage () {
        await this.primaryHeader.waitFor();
        await expect(this.headerLabel).toBeVisible();
    }

}