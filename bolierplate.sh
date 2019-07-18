#!/bin/bash

mkdir my-component
cd my-component
npm init

npm i react react-dom -D
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader babel-core babel-loader@7.1.4 babel-preset-env babel-preset-react -D

mkdir src
mkdir examples
mkdir examples/src


touch .babelrc


npm i babel-cli -D
