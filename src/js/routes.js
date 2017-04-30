'use strict';


const NODE_ENV = process.env.NODE_ENV || 'development';
const React = require('react');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // v4


let App = require('./App');


/* Выношу props из компонентов раутера. Потом ставить так: <Router {...router}> */
let router = {
    basename: '/', // string
    getUserConfirmation: null, // func
    forceRefresh: false, // bool, full reload на каждый переход
    keyLength: 12, // num, def == 6,
    // history: browserHistory,
    // children: [],
}


/* Это снова v3. Забил на v4, она еще в бете */
function getRoutes(params) {

    return (
        <Router>
            <Route path="/" component={App} />
        </Router>
    )
}

module.exports.routes = getRoutes;