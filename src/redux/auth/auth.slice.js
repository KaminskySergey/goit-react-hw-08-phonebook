import { persistReducer } from 'redux-persist'
import { initAuth } from "./auth.init-state";
import { logIn, logOut, refresh, register } from "./auth.operations";
import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'




const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.pending, state => state)
    .addCase(register.fulfilled, (state, {payload}) => {
        state.user = payload.user
        state.token = payload.token;
        state.isLoadingUser = true;
    })
    .addCase(register.rejected, state => state)
    ///======================================================
    .addCase(logIn.pending, state => state)
    .addCase(logIn.fulfilled, (state, {payload}) => {
        state.user = payload.user
        state.token = payload.token;
        state.isLoadingUser = true;
    })
    
    ///======================================================
    .addCase(logOut.fulfilled, state => {
        state.user = {name: null, email: null}
        state.token = null;
        state.isLoadingUser = false;
    })
    ///======================================================
    .addCase(refresh.pending, (state, {payload}) => {
        state.isRefreshingUser = true;
    })
    .addCase(refresh.fulfilled, (state, {payload}) => {
        // state.user.name = payload.name
        // state.user.email = payload.email
        state.user = {name: payload.name, email: payload.email}
        state.isRefreshingUser = false;
        state.isLoadingUser = true;
        // state.token = payload.token;
        
        
    })
    .addCase(refresh.rejected, (state, { payload }) => 
        {state.isRefreshingUser = false})
    }
}) 

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
  }

export const authReducer = persistReducer(persistConfig, authSlice.reducer)
