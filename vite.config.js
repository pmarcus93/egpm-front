import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';

const path = require("path");

export default defineConfig({
  plugins: [vue({
  })],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixins.scss";
                    @import "@/styles/_typography.scss";
                `
      }
    }
  },
  build: {
    rollupOptions: {}
  }
})
