/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: '@workdigtital/component-library-react',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        exports: 'named'
      }
    },
    sourcemap: true
  },
  css: {
    devSourcemap: true
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**.stories**', '.storybook/**', '**.types**'],
    coverage: {
      all: true,
      clean: false,
      exclude: [
        '**/*.storybook/*',
        '**/*.stories/*',
        '**/App.tsx',
        '**/animations/**',
        '**/coverage/**',
        '**/DefaultDropdown/**',
        '**/dist/**',
        '**/Divider/**',
        '**/Example.tsx',
        '**/Examples/**',
        '**/Experiments/**',
        '**/GroupWrapper/**',
        '**/index.ts',
        '**/ListFooter/**',
        '**/main.tsx',
        '**/mock*',
        '**/node_modules/**',
        '**/Panel/**',
        '**/*{.,-}{test,spec,stories,types,config,d}.?(c|m)[jt]s?(x)',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}'
      ],
      provider: 'istanbul',
      reporter: ['json']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@flaticon': path.resolve(__dirname, './node_modules/@flaticon')
    }
  }
});
