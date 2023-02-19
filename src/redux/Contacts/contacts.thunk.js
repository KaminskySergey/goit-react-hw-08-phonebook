import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsThunk = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
    
    try {
        const {data} = await axios.get('/contacts/')
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue('rtrtrtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    }
})

export const addContactsThunk = createAsyncThunk('addContact', async (contact) => {
    const {data} = await axios.post('/contacts', contact)
    console.log(data, 'ttttttttttttttt')
    return data
})

export const deleteConactsThunk = createAsyncThunk('deleteConacts', async(id) => {
    console.log(id, 'del')
    const {data} = await axios.delete(`/contacts/${id}`, )
    console.log(data, 'del')
    return data;
})