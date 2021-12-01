### Updating npm packages in node project
If the previous version of npm packages are already available locally inside
`node_modules` folder, following should do the job:
```bash
npm update
rm package-lock.json
mkdir empty && rsync -r --delete empty/ node_modules && rm -r node_modules empty
npm install
```

If you don't have previous npm packages locally:
```bash
# list first before actually upgrading
npx npm-check-updates --target minor
# run the upgrade
npx npm-check-updates --upgrade --target minor

# do it carefully as upgrading major versions might break things
npx npm-check-updates --upgrade
rm package-lock.json
mkdir empty && rsync -r --delete empty/ node_modules && rm -r node_modules empty
npm i
```