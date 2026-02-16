import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from './playwright.config';

test('test', async ({ page }) => {
  await page.goto('https://www.goodreads.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('petrosyan.tamara98@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('alien1159753');
  await page.getByRole('button', { name: 'Sign in' }).click({ timeout: 5_000 });
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Books' })).toBeVisible();
  await page.getByRole('button', { name: 'amara petro' }).click();
  await page.getByRole('link', { name: 'Sign out' }).click();

  await page.context().storageState({ path: STORAGE_STATE })
});