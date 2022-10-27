import { test, expect } from '@playwright/test';

test.describe('Counter App', () => {
  test('should decrease the count by clicking the left button', async ({
    page,
  }, { outputDir }) => {
    await page.goto('/');
    const comp = page.locator('.counter-component').first();
    const a = Number(await comp.locator('div').textContent());
    await comp.locator('button').first().click();
    const b = Number(await comp.locator('div').textContent());
    await page.screenshot({ path: `${outputDir}/result.jpg` });
    expect(b).toBeLessThan(a);
  });

  test('should increase the count by clicking the right button', async ({
    page,
  }, { outputDir }) => {
    await page.goto('/');
    const comp = page.locator('.counter-component').first();
    const a = Number(await comp.locator('div').textContent());
    await comp.locator('button').last().click();
    const b = Number(await comp.locator('div').textContent());
    await page.screenshot({ path: `${outputDir}/result.jpg` });
    expect(b).toBeGreaterThan(a);
  });
});
