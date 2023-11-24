## Assignment Typescript project

### How to run this project
install packages
``` sh
npm i
```
Compile to Javascript
``` sh
npx tsc
```
Run the unit tests
``` sh
npm test
```
Run the code
``` sh
node dist/mergeCollections.js
```

### How to setup project, dependency, execute code, and unit test (Jest)

Make directory
``` sh
mkdir assignment_typescript_project && cd assignment_typescript_project
mkdir src
mkdir test
```
Setup project and install dependency
``` sh
npm init -y
npx gitignore node
npm i -D typescript jest ts-jest @types/jest
npx tsc --init
```
Change the json in our tsconfig.json file 
``` json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "./",
    "outDir": "./dist",
    "sourceMap": true
  }
}
```
Configure Jest and starter tests

``` sh
npx ts-jest config:init
```
Add the test command for Jest in package.json file
``` json
"scripts": {
    "test": "jest"
},
```
When you want to execute code, the TypeScript code must be compiled to Javascript with the command
``` sh
npx tsc
```
Run the unit tests
``` sh
npm test
```
Run the code
``` sh
node dist/mergeCollections.js
```