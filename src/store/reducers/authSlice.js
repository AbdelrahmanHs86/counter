import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedin: false },
    reducers: {
        toggleAuth(state, action) {
            state.loggedin = !state.loggedin;
        },
    }

})


export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;