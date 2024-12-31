import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const user_login = createAsyncThunk(
    'auth/user_login',
    async(info) => {
        // console.log(info)
        try {
            const {data} = await api.post('/user-login', info, {withCredentials: true})
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
)

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
    },
    reducers: {
        
    },
    extraReducers: () => {

    }
})

export default authReducer.reducer;