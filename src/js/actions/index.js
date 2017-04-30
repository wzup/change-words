
function getMessages(params) {
    return (dispatch, getState) => {

        let db = firebase.database();
        db.ref('/messages').once('value').then(function(snapshot) {
            let msg = snapshot.val();
            dispatch({
                type: 'messages',
                messages: Object.values(msg)
            });
        });
    }
}
module.exports.getMessages = getMessages;


function getWords(params) {
    return (dispatch, getState) => {

        let db = firebase.database();
        db.ref('/words').once('value').then(function(snapshot) {
            let words = snapshot.val();
            dispatch({
                type: 'words',
                words: Object.values(words)
            });
        });
    }
}
module.exports.getWords = getWords;


function changeWords(param) {
    return (dispatch, getState) => {
        let state = getState();
        // let change = [];
        let action = {
            type: 'change',
        }
        if(param) {
            action.change = [param];
        }
        else {
            let change = state.messages.map(m => {
                let split = m.split(/\s+/ig);
                let result = split.map(word => {
                    if(state.words.indexOf(word.toLowerCase()) != -1) {
                        return ' *** ';
                    }
                    else
                        return word + ' ';
                });
                return result;
            })
            action.change = change;
        }
        dispatch(action);
    }
}
module.exports.changeWords = changeWords;