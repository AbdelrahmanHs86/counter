import { configureStore } from '@reduxjs/toolkit';

const initState = { counter: 0, showCounter: true };

const countReducer = (state = initState, action) => {
    if (action.type === 'Increase') {
        return { ...state, counter: state.counter + action.payload }
    }

    if (action.type === 'Decrease') {
        return { ...state, counter: state.counter - action.payload }
    }

    if (action.type === 'toggleCounter') {
        return { ...state, showCounter: !state.showCounter }
    }

    return state;
}

const store = configureStore({ countReducer });




export default store;