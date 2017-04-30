'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const util = require('util');
const path = require('path');
const fs = require('fs');
let express = require('express');
let router = express.Router();


router.use((req, res, next) => {
    console.log(__filename, '[ ALL ]:', req.method + ' ' + req.originalUrl, '======================\n\n');
    next();
})

const pageVars = require('./pageVars');

router.get('/', (req, res, next) => {
    res.status(200).set({
        'x-my-header': '1000'
    }).render('index', Object.assign({}, pageVars, {
        title: 'Index',
        page: 'index',
        html: '<h1>HI</h1>',
    }));
});


module.exports = router;
