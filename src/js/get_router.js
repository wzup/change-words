'use strict';


const NODE_ENV = process.env.NODE_ENV || 'development';
const React = require('react');
import { StaticRouter, BrowserRouter, Route, Link } from 'react-router-dom'; // v4
import { ConnectedRouter } from 'react-router-redux';

function getRouter(params) {
    if(params.env == 'browser') {
        return (
            <BrowserRouter router={params.router}>
                {params.App}
            </BrowserRouter>
        );
    }
    else if(params.env == 'server') {
        return (
            <StaticRouter location={params.url} context={params.context}>
                {params.App}
            </StaticRouter>
        )
    }
}

module.exports = getRouter;
