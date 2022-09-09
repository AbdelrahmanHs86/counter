import { createSlice } from '@reduxjs/toolkit';

const initState = { counter: 0 };

const counterReducer = createSlice(
    {
        name: 'counter',
        initialState: initState,
        reducers: {
            Increase(state, action) {
                state = state + action.payload
            },
            Decrease(state, action) {
                state = state + action.payload
            },
        },
    }
);

export const { increase, decrease } = counterReducer.actions
export default counterReducer.reducer;