# Test React Library

> [!WARNING]
> This repo is a POC to test the creation of a react component library.

To install this library use the following command: `yarn add @alexdametto/test-react-library`

## Publishing a new version
The steps to publish a new version of the library are:
1. have configured properly the `.npmrc` file
2. run `yarn build` to properly build the library
3. run `yarn publish` and type the new version number

This process can also be automated with a GitHub action.

## Configuring `.npmrc` file
Create a `.npmrc` file in the root of the project with the following content:
```
@GITHUB_USERNAME:registry=https://npm.pkg.github.com/YOUR_USERNAME
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
```
