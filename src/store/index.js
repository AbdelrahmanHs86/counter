import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

const store = configureStore({ reducers: { counterReducer } });




export default store;