'use strict';
// import { createStore } from 'redux';

const { createStore } = Redux;

console.log('App Started!');

// Store!
const defaultState = {
    balance: 0
}

// Actions!
const actionIncrement = {
    type: 'increment'
}

const actionDecrement = {
    type: 'decrement'
}

// Reducer!
const account = (state=defaultState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                balance: state.balance + 1
            };
        case 'decrement':
            return {
                balance: state.balance - 1
            };
        default:
            return state;
    }
}

const store = createStore(
    account, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('subscribing to state changes...');
    const state = store.getState();
    console.log('State is: ', state);
    const balance = document.querySelector('#balance');
    balance.innerHTML = state.balance;
});

const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

incrementButton.addEventListener('click', (event) => {
    event.preventDefault();
    store.dispatch(actionIncrement);
})

decrementButton.addEventListener('click', (event) => {
    event.preventDefault();
    store.dispatch(actionDecrement);
})