import { initAuth } from "./auth.init-state";
import { register } from "./auth.operations";

import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
        return state;
    })
    .addCase(register.fulfilled, (state, {payload}) => {
        console.log(state, 'state')
        return state.user = payload;
    })
    .addCase(register.rejected, (state) => {
        return state;
    })
    }
}) 


export const authReducer = authSlice.reducer;
