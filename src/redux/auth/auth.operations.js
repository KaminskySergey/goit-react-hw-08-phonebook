import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";



export const register = createAsyncThunk('auth/register', async (credentials) => {
    try {
        console.log(JSON.stringify(credentials));
        const {data} = await axios.post('/users/signup', credentials)
        console.log(data)
        return data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(error)
    }
})