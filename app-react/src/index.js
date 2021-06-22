import React from 'react';
import {
    render
} from 'react-dom';
import Root from './components/root';
import {
    createGlobalStyle,
    ThemeProvider
} from 'styled-components';
import * as theme from './theme';
import {
    ApolloProvider as ApolloProvider2
} from "@apollo/react-components";
import graphqlClient from './api/graphqlClient';
require("babel-core/register");
require("babel-polyfill");
import store from "./store";
import {
    ApolloProvider,

} from '@apollo/client'
import {
    Provider
} from 'react-redux';

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,900&display=swap');

html, body, #app {
    height: 100%;
    margin:0;
    padding:0;
    width:100%;
}

body {
    font-family: Roboto, sans-serif;
}`;
render( < Provider store = {
        store
    } > < ApolloProvider2 client = {
        graphqlClient
    } > < ApolloProvider client = {
        graphqlClient
    } > < ThemeProvider theme = {
        theme
    } >
    <
    GlobalStyles / > < Root / > < /ThemeProvider></ApolloProvider > < /ApolloProvider2></Provider > , document.getElementById('app'));