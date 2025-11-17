---
title: Setting up Cypress
---

Install cypress as dev dependency:
```bash
npm install --save-dev cypress
```

Launch cypress:
```bash
npx cypress open
```

Follow cypress wizard to initialize end-to-end testing.

If it is a TypeScript project, add a `tsconfig.json` file under the cypress
folder with content:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
