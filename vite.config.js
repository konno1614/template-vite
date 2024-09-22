import { globSync } from "glob";
import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from "vite";
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { ViteEjsPlugin } from "vite-plugin-ejs";

const jsFiles = Object.fromEntries(
    globSync('src/**/*.js', { ignore: ['node_modules/**','**/modules/**','**/dist/**']}).map(file => [
        path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
    ])
);

const scssFiles = Object.fromEntries(
    globSync('src/assets/styles/pages/**/*.scss', { ignore: ['src/assets/styles/pages/**/_*.scss'] }).map(file => [
        path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
    ])
);

const htmlFiles = Object.fromEntries(
    globSync('src/**/*.html', { ignore: ['node_modules/**', '**/dist/**'] }).map(file => [
        path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
    ])
);

const inputObject = { ...scssFiles, ...jsFiles, ...htmlFiles };

console.log(inputObject)

export default defineConfig({
    root: "src",
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: inputObject,
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: (assetInfo) => {
                if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
                    return 'assets/img/[name].[ext]';
                }
                if (/\.css$/.test(assetInfo.name)) {
                    return 'assets/css/[name].[ext]';
                }
                    return 'assets/[name].[ext]';
                }
            },
        }
    },
    plugins: [
        ViteEjsPlugin(),
        sassGlobImports()
    ],
    server: {
        port: 3000
    }
})
