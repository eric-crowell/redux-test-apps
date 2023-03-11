/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 240000,
    globalSetup: [
      './vite.globalSetup.ts',
    ],
    environment: 'detox/runners/jest/testEnvironment',
    reporters: ['detox/runners/jest/reporter'],
    runner: 'jest',
  },
});
