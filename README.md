[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# React Native Typescript Template

This project is a [React Native](http://reactnative.dev) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides an architecture optimized for building solid cross-platform mobile applications through separation of concerns between the UI and business logic. It is extremely documented so that each piece of code that lands in your application can be understood and used.

> If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :star:

## Architecture
The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

- Presentational components are separated from containers (aka "views").

- State is managed using global Redux stores.

- Application side-effects (API calls, etc.) are separated from UI and state manipulation using Redux Saga.

## Content
The boilerplate contains:

- React Native (v0.63.0) application (in "ejected" mode to allow using dependencies that rely on native code)
- Clear directory layout to provide a base architecture for your application
- Absolute Paths to avoid ```../..``` hell
- Prettier and Eslint configured for React Native
- Commitlint to help your team adhering to a commit convention
- Lint staged to help your team push only validated codes
- Standard Version a utility for versioning using semver and CHANGELOG generation

## Directory layout

## Updates

## Requirements

# Using the boilerplate
To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: rm -rf .git/
- install the npm dependencies by running yarn
- rename the React Native project to your own project name: yarn run rename -- <YourProjectName> (the default name is Boilerplate)
- remove the LICENSE file and the "License" section from the README if your project is not open source
- Feel free to remove the section "Using the boilerplate" from the README (you will not need it anymore in your project). You are encouraged to keep the rest of the documentation in your project so that it is self-explanatory.

You can now create a new git repository for your project (using git init) and create the first commit.

## Running the project
Assuming you have all the requirements installed, you can setup and run the project by running:
create your configuration file App/Config/index.js from index.dev.js (if you are in dev environment) and fill the missing values
run the following steps for your platform


## How to commit

Instead use the classic command ```git add . & git commit -m "<message>"``` you have to use:

```
yarn cm

or

npm run cm
```

This is because we have a pre configured commit style.

## Running your React Native application
### Step 1: Start Metro
First, you will need to start Metro, the JavaScript bundler that ships with React Native.

```bash
npx react-native start
```

### Step 2: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```bash
npx react-native run-ios

or

npx react-native run-android
```

## Testing