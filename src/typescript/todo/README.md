# Todo (TypeScript)

Initialize the project:
```console
npm init --yes
```

Install typescript in the project:
```console
npm i typescript
```

You can install typescript globally, in your computer by:
```console
npm install --global typescript
```

If typescript is installed globally in your system, you can run `tsc` commands
from your terminal:
```console
tsc --version
```

Add following to the `package.json` script:
```js
"tsc": "tsc",
```

Now you can execute `tsc` commands by:
```console
npm run tsc --version
```

Create `.gitignore` file and add `node_modules` folder to it.

Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "outDir": "./dist",
    "rootDir": "./src",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

Update `package.json` to use ESM:
```json
{
  "type": "module"
}
```

Create source files under `src`. Compile typescript:
```console
npm run tsc
```

The compiled javascript code will be placed under `dist`. Run javascript:
```console
node dist/index.js
```

Third party packages:
```console
npm i inquirer@latest
```

The latest version of inquirer (v12+) uses ESM modules.

Install lowdb for persistent storage:
```console
npm i lowdb@latest
```

The latest version of lowdb (v7+) uses ESM modules and the new API with `LowSync` and `JSONFileSync`.
