import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Required for React testing
    setupFiles: './setupTests.js',
    globals: true, // Allows `test()` to be used globally
  },
  esbuild: {
    loader: 'jsx', // Ensures JSX is properly parsed
  },
});
