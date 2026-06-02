import { Page } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  private getLotCards() {
    return this.page.locator('article.c-lot-card__container');
  }

  async openSecondLot() {
    const secondLot = this.getLotCards().nth(1);

    await secondLot.waitFor({ state: 'visible' });
    await secondLot.scrollIntoViewIfNeeded();
    await secondLot.locator('a').first().click();
  }
  
}