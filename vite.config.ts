import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const entryPoints: { [key: string]: string } = {};
const files = fs.readdirSync(path.resolve(__dirname, 'src'));
files.forEach(file => {
  if (file.endsWith('.ts')) {
    const name = file.replace('.ts', '');
    entryPoints[name] = path.resolve(__dirname, 'src', file);
  }
});

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: entryPoints,
      output: {
        entryFileNames: '[name].js',
      }
    }
  }
})