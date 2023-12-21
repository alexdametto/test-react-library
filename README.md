# Test React Library

> [!WARNING]
> This repo is a POC to test the creation of a react component library. The [test-react-project](https://github.com/alexdametto/test-react-project) is the React project that is importing this library.

To install this library follow these steps:

1. Create a `.npmrc` file in the project with the following content:

```
registry=https://registry.yarnpkg.com/

@alexdametto:registry=https://npm.pkg.github.com
```

2. Then run `yarn add @alexdametto/test-react-library`

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
