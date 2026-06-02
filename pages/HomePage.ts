import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.catawiki.com/en');
  }

  async acceptCookies() {
    await this.page.locator('#uc-overlay').click();
    await this.page.getByRole('button', { name: 'Accept All' }).click();
  }

  async searchItem(item: string) {
    const searchBox = this.page.getByRole('combobox', {
      name: 'Search for brand, model,',
    });

    await searchBox.click();
    await searchBox.fill(item);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}