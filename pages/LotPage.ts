import { Page } from '@playwright/test';

export class LotPage {
  constructor(private page: Page) {}

  async getTitle(): Promise<string> {
    return await this.page
      .locator('h1.LotTitle_title__rXYHd')
      .innerText();
  }

  async getPrice(): Promise<string> {
    return await this.page
      .getByTestId('lot-bid-status-section')
      .getByText('€')
      .first()
      .innerText();
  }

  async getFavorites(): Promise<string> {
    return await this.page
      .locator('button[title="favourite"] span')
      .innerText();
  }
}
