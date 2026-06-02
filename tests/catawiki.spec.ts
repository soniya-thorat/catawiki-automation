import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { LotPage } from '../pages/LotPage';

test('Catawiki search and validate lot', async ({ page }) => {
  const homePage = new HomePage(page);
  const resultsPage = new SearchResultsPage(page);
  const lotPage = new LotPage(page);

  await homePage.navigate();
  await homePage.acceptCookies();
  await homePage.searchItem('train');

  await resultsPage.openSecondLot();

  const title = await lotPage.getTitle();
  console.log('Title:', title);

  const price = await lotPage.getPrice();
  console.log('Price:', price);

  const favorites = await lotPage.getFavorites();
  console.log('Favorites:', favorites);

  // Example assertion
  expect(title).toBeTruthy();
  expect(price).toContain('€');
});