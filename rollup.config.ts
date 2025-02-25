import { defineConfig } from "rollup";

import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import emitDeclarations from "./build/plugins/emitDeclarations";

export default defineConfig({
    input: {
        "data-structure": "./src/data-structure/index.ts",
        index: "./src/index.ts",
    },
    output: {
        dir: "dist",
        format: "es",
    },
    plugins: [
        del({ targets: "dist/*" }),
        typescript(),
        terser(),
        emitDeclarations([{ name: "data-structure", path: "./src/data-structure/types.d.ts" }]),
    ],
});
