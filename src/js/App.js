'use strict';

/* React stuff */
const util = require('util');
const React = require('react');
const ReactDOM = require('react-dom');

let globals = require('globals.scss');
let css = require('App.local');

import { connect } from 'react-redux';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// const store = require('./Store');
// const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// const ReactTransitionGroup = require('react-addons-transition-group');
// const Scrollbars = require('react-scrollbar');
// import { StickyContainer, Sticky } from 'react-sticky';

import { getMessages, getWords, changeWords } from './actions';


// const Home = require('./Home');
// const Header = require('./Header');
// const Landing = require('./Landing');
// const Profile = require('./Profile');
// const LoginPage = require('./LoginPage');
// const SignupPage = require('./SignupPage');
// const requireAuth = require('./drafts/requireAuth');
// const Grid = require('react-bootstrap/lib/Grid');
// const Row = require('react-bootstrap/lib/Row');
// const Col = require('react-bootstrap/lib/Col');
// import Dialog from 'material-ui/lib/dialog'; // material-ui

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// require('./../../index');

// let css = require('index-wp.scss');

class App extends React.Component {
    render() {

        let msg = [];
        let words = [];
        let change = [];

        if(this.props.messages) {
            this.props.messages.forEach((m, i) => {
                msg.push(<div key={i+'m'}>{i}. {m}</div>);
            });
        }
        else {
            msg = '[Press button to get messages]';
        }

        if(this.props.words) {
            this.props.words.forEach((w, i) => {
                words.push(<div key={i+'w'}>{i}. {w}</div>);
            });
        }
        else {
            words = '[Press button to get words]';
        }

        if(this.props.change) {
            this.props.change.forEach((c, i) => {
                change.push(<div key={i+'c'}>{i}. {c}</div>);
            });
        }
        else {
            change = '[Press button to change words]';
        }

        return (
            <section id="stickyContainer">
                {/*<div isAuth={this.props.isAuth} user={this.props.user}></div>*/}
                    <div>
                        {msg}
                    </div>
                <br/>
                <div data-comp="App-Grid">
                    <button onClick={this.getMessages}>Get All Messages</button>
                </div>

                <br/>
                <div>--------------------------------------------</div>
                <br/>

                <div>
                    {words}
                </div>
                <br/>
                <div data-comp="App-Grid">
                    <button onClick={this.getWords}>Get All Words</button>
                </div>

                <br/>
                <div>--------------------------------------------</div>
                <br/>

                <div>
                    {change}
                </div>
                <br/>
                <div data-comp="App-Grid">
                    <button onClick={this.changeWords}>Change Words in Messages</button>
                </div>
            </section>
        );
    }
    getMessages = (e) => {
        this.props.dispatch(getMessages());
    }
    getWords = (e) => {
        this.props.dispatch(getWords());
    }
    changeWords = (e) => {
        let param;
        if(!this.props.messages) {
            param = 'Get Messages First! Click Button above';
        }
        if(!this.props.words) {
            param = 'Get Words First! Click Button above';
        }
        this.props.dispatch(changeWords(param));
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        let a = 10;
    }
    componentWillUnmount() {
        let a = 10;
    }
    componentWillUpdate(nextProps, nextState) {
        let a = 10;
    }
    componentDidUpdate(prevProps, prevState) {
        let a = 10;
    }
    componentWillMount() {
        let a = 10;
        var config = {
            apiKey: "AIzaSyA88GPV0FbeLfx7lWFpZrLNXDbWmZctq0w",
            authDomain: "innovecs-b193f.firebaseapp.com",
            databaseURL: "https://innovecs-b193f.firebaseio.com",
            projectId: "innovecs-b193f",
            storageBucket: "innovecs-b193f.appspot.com",
            messagingSenderId: "597713750243"
        };
        firebase.initializeApp(config);
    }
    shouldComponentUpdate(nextProps, nextState) {
        let a = 10;
        return true;
    }
    componentWillAppear(cb) {
        let a = 10;
    }
    componentWillEnter(cb) {
        let a = 10;
    }
};

function defaultComponent() {
    return (
        <div>
            I'm a defaultComponent
        </div>
    );
}


/**
 * Какая бы ни была авторизация, вызываю connect - connect a Redux component to a Redux store
 */
let mapStateToProps = (state) => {
    return {
        messages: state.messages,
        words: state.words,
        change: state.change
    }
}
App = connect(mapStateToProps)(App);
// App = connect()(App) // не подписываемся
// App = connect(state => state)(App);

module.exports = App;


