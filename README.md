# antlr4ts-deno
Deno port of antlr4ts.  
Runtime only; not including compiler.

## Use (Deno)
### Config [Import Maps](https://deno.land/manual/linking_to_external_code/import_maps)
#### import_map.json
```json
{
    "imports": {
        "antlr4ts": "https://denopkg.com/jabo-lang/antlr4ts-deno/mod.ts",
        "antlr4ts/": "https://denopkg.com/jabo-lang/antlr4ts-deno/src/"
    }
}
```
#### .vscode/settings.json (for vscode users)
```json
{
    "deno.importMap": "./import_map.json"
}
```
### Convert Lexer/Parser Files
#### convert.ts
Change import path. ex) `"antlr4ts/RuleContext"` -> `"antlr4ts/RuleContext.ts"`
```js
const output = "src/parser/dist" // ANTLR output directory
for await (const dirEntry of Deno.readDir(output)) {
    if (dirEntry.name.endsWith(".ts")) {
        console.log(`Converting '${dirEntry.name}'`)

        const path = output + dirEntry.name
        const script = await Deno.readTextFile(path)
        const denoScript = script.replaceAll(/import (.*) from "(.*)"/g, `import $1 from "$2.ts"`)
        Deno.writeTextFile(path, denoScript)
    }
}
```
```sh
deno run -A convert.ts
```
### Use Your Grammar in TypeScript
See [antlr4ts README](https://github.com/tunnelvisionlabs/antlr4ts).
```ts
import {
    ANTLRInputStream,
    CommonTokenStream,
} from "antlr4ts"

import { MainLexer } from "./dist/MainLexer.ts"   // Your lexer
import { MainParser } from "./dist/MainParser.ts" // Your parser

let inputStream = new ANTLRInputStream("text")
let lexer = new MainLexer(inputStream)
let tokenStream = new CommonTokenStream(lexer as any)
let parser = new MainParser(tokenStream)

let tree = parser.prog()  // Your entry point

console.log(tree)
```
