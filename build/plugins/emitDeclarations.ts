import type { Plugin } from "rollup";

import path from "node:path";
import fs from "node:fs/promises";

interface IDeclaration {
    name: string;
    path: string;
}

export default function emitDeclarations(declarations: IDeclaration[]): Plugin {
    return {
        name: "rollup-plugin-emit-declarations",
        async generateBundle() {
            const importees: string[] = [];

            for (const declaration of declarations) {
                const source = await fs.readFile(path.resolve(declaration.path), "utf8");
                importees.push(declaration.name);

                this.emitFile({
                    type: "asset",
                    fileName: `${declaration.name}.d.ts`,
                    source,
                });
            }

            this.emitFile({
                type: "asset",
                fileName: "index.d.ts",
                source: importees.reduce((content, importee) => (content += `export * from "./${importee}";\n`), ""),
            });
        },
    };
}
