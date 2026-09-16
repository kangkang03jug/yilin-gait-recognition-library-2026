import { test, expect } from '@playwright/test';
test('personal library has accessible primary pages', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: "YiLin's Gait Recognition Research Library" }),
  ).toBeVisible();
  await page.getByRole('link', { name: '论文池', exact: true }).click();
  await expect(page.getByRole('heading', { name: '论文池' })).toBeVisible();
  await expect(
    page.getByText('GaitSet: Regarding Gait as a Set for Cross-View Gait Recognition'),
  ).toBeVisible();
});
