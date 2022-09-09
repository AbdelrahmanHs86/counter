import { createSlice } from '@reduxjs/toolkit';

const initState = { counter: 0 };

const counterReducer = createSlice(
    {
        name: 'counter',
        initialState: initState,
        reducers: {
            Increase(state, action) {
                state.counter += action.payload;
            },
            Decrease(state, action) {
                state.counter > 0 ? state.counter -= action.payload : state.counter = 0;
            },
        },
    }
);

export const { Increase, Decrease } = counterReducer.actions
export default counterReducer.reducer;