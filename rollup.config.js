import path from "node:path";
import fs from "node:fs";

import { defineConfig } from "rollup";

import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

function copyDeclaration() {
    return {
        name: "copyDeclaration",
        writeBundle() {
            fs.copyFileSync(path.resolve("dist/index.d.ts"), path.resolve("index.d.ts"));
        },
    };
}

export default defineConfig({
    input: ["src/index.ts"],
    output: {
        dir: "dist",
        format: "es",
    },
    plugins: [del({ targets: "dist/*" }), typescript(), terser(),/*  copyDeclaration() */],
});
