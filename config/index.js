'use strict';

const env = process.env.NODE_ENV || 'development';
const util = require('util');
const path = require('path')
// console.log(__filename, '[env]:', util.inspect(env, {depth: null, colors: true}));



let config = {
    development: {
        protocol: 'http',
        host_url: 'http://localhost:3005',
        host: 'localhost:3005',
        assets_path: {
            react: 'src/js/',
            scss: 'src/sass'
        }
    },
    production: {
        protocol: 'http',
        host_url: 'http://localhost:3005',
        host: 'localhost:3005',
        assets_path: {
            react: 'src/js',
            scss: 'src/sass'
        }
    },
    "test": {
        protocol: 'http',
        host_url: 'http://localhost:3005',
        host: 'localhost:3005',
        assets_path: {
            react: 'src/js',
            scss: 'src/sass'
        }
    },
    src: {
        self: path.resolve(__dirname, '..', 'src'),
        js: path.resolve(__dirname, '..', 'src/js'),
        sass: path.resolve(__dirname, '..', 'src/sass'),
    },
    dist: {
        self: path.resolve(__dirname, '..', 'src'),
        js: path.resolve(__dirname, '..', 'dist/js'),
        sass: path.resolve(__dirname, '..', 'dist/sass'),
    },
    titles: {
        index: 'Index'
    },
    react: {
        version: 2,
        dialogTitleStyles: {
            fontSize: '1.5em',
            padding: '.7em'
        },
        dialogBodyStyles: {
            padding: '1em',
            textAlign: 'center'
        },
    },
    errors: {
    },

    defaultLocale: 'en',
    sessionCookieName: 'sid',
    session_salt: 'this is simple salt phrase',
    sessionExpirationHours: 80
}

module.exports = config;
