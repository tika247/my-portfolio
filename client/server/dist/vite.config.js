import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
const basePath = process.env.VITE_BASE_PATH || '/';
export default defineConfig({
    base: basePath,
    plugins: [
        react(),
        tailwindcss(),
        {
            name: 'rewrite-css-public-urls',
            enforce: 'post',
            generateBundle(_, bundle) {
                for (const file of Object.values(bundle)) {
                    if (file.type === 'asset' && file.fileName.endsWith('.css')) {
                        file.source = file.source.replaceAll('url(/assets/', `url(${basePath}assets/`);
                        file.source = file.source.replaceAll('url("/assets/', `url("${basePath}assets/`);
                        file.source = file.source.replaceAll("url('/assets/", `url('${basePath}assets/`);
                    }
                }
            },
        },
    ],
    resolve: {
        alias: { '@': path.resolve(__dirname, 'client') },
    },
    css: {
        postcss: {},
    },
    build: {
        outDir: 'dist',
        emptyOutDir: false,
    },
});
