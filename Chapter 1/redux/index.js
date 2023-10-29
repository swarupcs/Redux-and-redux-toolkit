import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

//store
const store = createStore(reducer, applyMiddleware(logger.default));

//reducer
function reducer(state={amount:1}, action) {
    if(action.type === "increment") {
         
        return {amount: state.amount+1}
    }
    return state
}

const history = []

//gloabl state
// console.log(store.getState());

// store.dispatch({type: 'increment'})

// console.log(store.getState());

store.subscribe(() => {
    history.push(store.getState())
    console.log(history)
})

setInterval(() => {
    store.dispatch({type: 'increment'})
}, 2000)
