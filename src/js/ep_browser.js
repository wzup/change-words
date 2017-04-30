'use strict';

/**
 * Версия реакт-приложения для браузера. А отдельная есть для сервера.
 * Отдельные, т.к. разные конфиги для браузерного и серверного бандла нужны для webpack компилить.
 * Здесь можно юзать все, что есть в браузере: window, jquery, т.д. В серверной версии нет window, и DOM, и document.getElementById для вставить в DOM
 *
 * Не импортирую сюда свои компоненты: App, Landing, т.д. Они импортируются в файл-модуль routes и там же в нем используются.
 * Т.к. иначе пришлось бы импортировать компоненты и сюда в browser версию для webpack, и в server версию webpack, и даже в routes/routes.js,
 *  и делать конфиг routes как фунцию и передавать в нее компоненты из всех трех локейшенов. А так они все рекваерятся там, где и используются.
 *
 * И конфиг routes уже импортируюю сюда, и в server версию и в routes/routes.js для match({ routes: routes, location: req.url } )
 * См: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
 * https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md
 *
 *
 * Просто сохраняю: http://engineering.blogfoster.com/higher-order-components-theory-and-practice/
 */


const React = require('react');
const ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const reducersFactory = require('./Store_f');
let routes = require('./routes').routes;
const loggerMiddleware = createLogger();
const GetRouter = require('./get_router');
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import { routerMiddleware, routerReducer } from 'react-router-redux';
const middleware = routerMiddleware(history);


const $  = require('jquery');
window.$ = $;


let routerConf = {
    basename: '/', // string
    getUserConfirmation: null, // func
    forceRefresh: false, // bool, full reload на каждый переход
    keyLength: 12, // num, def == 6,
    // history: history, // не надо в BrowserRouter, там он уже есть. Это из low-level Router поле
    // children: [],
}

/**
 * Тут определю залогенен ли юзер вообще
 */
function onAppEnter(nextState, replace, cb) {
    cb();
}

let store = createStore(
    // combineReducers({
    //     reducers: reducersFactory({}),
    //     router: routerReducer
    // }),
    reducersFactory({}),
    window.__state__,
    applyMiddleware(thunkMiddleware, loggerMiddleware, middleware)
);



let Application;
Application = (
    <Provider store={store}>
        <GetRouter env="browser" App={routes({onAppEnter: onAppEnter})} router={routerConf} history={history} />
    </Provider>
)
renderDOM(document.getElementById('root'));


function renderDOM(target) {
    ReactDOM.render(Application, target);
}
