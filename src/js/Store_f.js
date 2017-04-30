'use strict';



function reducersFactory(initialState) {

    // function reducers(state = stateTree, action) {
    return function reducers(state = initialState, action) {
        switch (action.type) {
            case 'messages':
                console.log('\n', '[val]:', action.messages);
                return Object.assign({}, state, {
                    messages: action.messages
                });
                break;
            case 'words':
                console.log('\n', '[val]:', action.words);
                return Object.assign({}, state, {
                    words: action.words
                });
                break;

            case 'change':
                console.log('\n', '[val]:', action.change);
                return Object.assign({}, state, {
                    change: action.change
                });
                break;
            default:
                return state;
        }
    }
}



module.exports = reducersFactory;
