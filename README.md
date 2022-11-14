# Premium Minds Test

[](https://github.com/euclidesdry/premium-minds-test/actions/workflows/node.js.yml/badge.svg?branch=main&style=flat-square)
[GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/euclidesdry/premium-minds-test/main?color=%230088FF&label=VERSION&style=flat-square)
[](https://img.shields.io/badge/Language-TypeScript-blue.svg?style=flat-square)
[](https://img.shields.io/badge/Language-CSS-blue.svg?style=flat-square)

Pokemon Test from Premium Minds Company

## Test Description

### Pokemon: Catch them all

Ash is catching Pokemon in a world consisting of an infinite two-dimensional grid of houses. In each house there is exactly one pokemon.

Ash starts by catching the pokemon that is in the house where he starts. Then, move to the house immediately north, south, east or west of where you are and catch the pokemon that is there, and so on. Attention: if he passes a house where he has already passed (and therefore where he has already caught a pokemon), there is no longer a pokemon for him to catch!

What we want to know is: starting with a world full of pokemon's (one in each house!), how many pokemon's does Ash catch for a given sequence of moves?

### Input Format

The program must read a line from stdin, which contains a sequence of movements. Each movement is described by a letter N, S, E or O (respectively: north, south, east, west in portuguese).

## Technologies

- NodeJS
- Jest

## Run or Test the Project

To run the project you will need to have installed on your machine NodeJS (if you don't have, download here: [NodeJS Official Website](https://nodejs.org/en/)) at least the version 16

### Commands to run, build and test

Before run, build or test the project you will need to install the node dependencies

```bash
yarn install
```

or

```bash
npm install
```

Run the following command to run the development version

```bash
yarn dev
```

or

```bash
npm dev
```

Run the following command to run the production version

```bash
yarn start
```

or

```bash
npm start
```

Run the following command to build the project

```bash
yarn build
```

or

```bash
npm build
```

Run the following command to run the project tests suit

```bash
yarn test
```

or

```bash
npm test
```