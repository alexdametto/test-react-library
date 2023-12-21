# Test React Library

> [!WARNING]
> This repo is a POC to test the creation of a react component library.

To install this library in your react project you need to:
1. Create a `.yarnrc` file with the following content
```
registry "https://npm.pkg.github.com/"
```
2. Run `yarn add @alexdametto/test-react-library`

## Publishing a new version
The steps to publish a new version of the library are:
1. Have configured properly the `.npmrc` file
2. Run `yarn build` to properly build the library
3. Run `yarn publish` and type the new version number

This process can also be automated with a GitHub action.

## Configuring `.npmrc` file
Create a `.npmrc` file in the root of the project with the following content:
```
@GITHUB_USERNAME:registry=https://npm.pkg.github.com/YOUR_USERNAME
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
```
