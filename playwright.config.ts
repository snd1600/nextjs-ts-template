import type { PlaywrightTestConfig } from '@playwright/test';

const testDir = './e2e';
const port = 5080;
const baseURL = `http://localhost:${port}/`;

const config: PlaywrightTestConfig = {
  testDir,
  outputDir: `${testDir}/.output`,

  webServer: {
    command: `pnpm next -p ${port}`,
    url: baseURL,
  },

  use: {
    viewport: { width: 1280, height: 720 },
    baseURL,
  },
};

export default config;
