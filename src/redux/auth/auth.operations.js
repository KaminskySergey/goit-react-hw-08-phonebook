import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const setClearHeader = () => {
    axios.defaults.headers.common.Authorization = null;
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    console.log(credentials, 'qqqqq')
    try {
        const {data} = await axios.post('/users/signup', credentials)
        console.log(data.token, 'regiter')
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    console.log(credentials, 'thunkAPI')
    try {
        const {data} = await axios.post('/users/login', credentials)
        console.log(data, 'logIn')
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout')
        
        setClearHeader()
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().user;
    console.log(token, 'tptptptpptpt')

    if(!token){
        return thunkAPI.rejectWithValue('Not tokin')
    }
    setAuthHeader(token)
    try {
        const {data} = await axios.get('/users/current')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    // console.log(thunkAPI.getState().user.token, 'tttt')
    // const {token} = thunkAPI.getState().auth
    // console.log(token, 'refffffff')
    
})