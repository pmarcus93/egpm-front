import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';

const path = require("path");

export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                compatConfig: {
                    MODE: 2
                }
            }
        }
    })],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
            vue: '@vue/compat',
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
