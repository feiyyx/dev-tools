import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
        rollupOptions: {
            input: {
                // popup
                popup: path.resolve(__dirname, 'popup/index.html'),
                // options
                options: path.resolve(__dirname, 'popup/index.html'),
                // background
                content: path.resolve(__dirname, 'popup/index.html'),
            },

            output: {
                dir: 'dist',
                format: 'esm',
                chunkFileNames: 'chunks/[name]-[hash].js',
            },
        }
  }
})
