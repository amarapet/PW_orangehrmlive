import { test, expect } from '@playwright/test';
import 'dotenv/config'

test.beforeEach('log_in flow log_out', async ({ page }) => {



});

test('log_in flow log_out', async ({ page }) => {
  //go to page
  //added as env, but I can change in config file baseURL
  await page.goto(process.env.BASE_URL!, { timeout: 10000 });
  //check that page opens 
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  //fill username and password
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ADMIN_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASSWORD!);

  //login and verify  
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();

  //some flow check
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('pet');
  await expect(page.getByRole('textbox').nth(1)).toHaveValue('pet');


});

test('log_out', async ({ page }) => {

  await page.goto(process.env.BASE_URL!, { timeout: 10000 });

  // Click user dropdown (top right profile icon)
  //using this method bc every time username is changing
  await page.locator('.oxd-userdropdown-name').click();

  // Click Logout
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // Verify login page
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

});