import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['tests/setupTests.ts'],
    include: ['tests/frontend/**/*.test.ts', 'tests/frontend/**/*.test.tsx', 'tests/frontend/**/*.spec.ts', 'tests/frontend/**/*.spec.tsx']
  }
})