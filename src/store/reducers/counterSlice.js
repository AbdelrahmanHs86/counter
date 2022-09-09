import { createSlice } from '@reduxjs/toolkit';
import { toggleAuth } from './authSlice';



const counterReducer = createSlice(
    {
        name: 'counter',
        initialState: { counter: 0 },
        reducers: {
            Increase(state, action) {
                state.counter += action.payload;
            },
            Decrease(state, action) {
                state.counter > 0 ? state.counter -= action.payload : state.counter = 0;
            },
        },
        extraReducers: {
            [toggleAuth]: (state, action) => {
                state.counter = 0;
            }
        }


    }
);

export const { Increase, Decrease } = counterReducer.actions
export default counterReducer.reducer;