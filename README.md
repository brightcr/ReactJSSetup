# ReactJSSetup

These are just simple setup guide to get started using Reactjs in Asp.Net MVC project.

## Conventions followed:
1. Keep source typescript files in src folder
2. Keep unit test cases spec files in tests folder
3. npm commands are executed in command prompt set with directory root
4. It is assumed that Node and TypeScript is already installed

## Intializing project:
Create New Asp.Net project - I have created by selecting Empty Project template with Asp.Net MVC.
Initialize NPM to create package.json: `npm init`

## Install typescript and Webpack as dev dependencies
`npm install -D typescript webpack`

## Create WebPack Configuration
Create file `webpack.config.js` and update it to use some typescript loader and source/destination path. I have used awesome typescript loader
`npm install -D awesome-typescript-loader`

## Create Typescript Config file - tsconfig.json
`tsc --init`

## Verify TypeScript/Webpack
We haven't integrated ReactJS yet. First we are verifying Typescript and Webpack are setup successfully. In that case, Webpack.config need to be modified to use DisplayGreets as entry point. Also, bundle.js the ouput of webpack would be referred in some html file and check whether message is shown in browser/console.

## Install React as local dependency
`npm install -S react react-dom @types/react @types/react-dom`

## Set up unit testing with jest
`npm install -D jest react-addons-test-utils enzyme`
Update Jest configuration in package.json and add preprocessor.js to transpile jest unit tests in typescript to JS

## Create React Component
Add Hello.tsx in App/Component folder. Create Index.tsx in App folder to render Hello component
Run Webpack command - `Webpack`
Verify the set up by running index.html or Index.cshtml Asp.Net View

## Verify Unit test setup
Create HelloTests.tsx in Tests folder and write test for Hello Component
Verify Tests by executing  `npm test`

## React 16 upgrade is present in develop branch