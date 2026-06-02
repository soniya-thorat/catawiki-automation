import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  

  reporter: 'html',

  use: {
    baseURL: 'https://www.catawiki.com',

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: true,

    viewport: {
      width: 1280,
      height: 720,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    
  ],
});