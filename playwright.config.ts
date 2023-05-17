import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  workers: 1,
  timeout: 5000,
  reporter: "html",
  use: {
    headless: true,
    //screenshot: "on",
    //video: "on"
  }
});
