import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const user_login = createAsyncThunk(
    'auth/user_login',
    async(info, {rejectWithValue, fulfillWithValue}) => {
        console.log(info)
        try {
            const {data} = await api.post('/user-login', info, {withCredentials: true})
            localStorage.setItem('accessToken', data.token)
            // console.log(data);
            return fulfillWithValue(data);
        } catch (error) {
            // console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)

export const user_register = createAsyncThunk(
    'auth/user_register',
    async(info, {rejectWithValue, fulfillWithValue}) => {
        try {
            console.log(info);
            const {data} = await api.post('/user-register', info, {withCredentials: true})
            localStorage.setItem('accessToken', data.token)
            // console.log(data);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
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
        messageClear: (state, _) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(user_login.pending, (state, {payload}) => {
            state.loader = true;
        })
        .addCase(user_login.rejected, (state, {payload}) => {
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(user_login.fulfilled, (state, {payload}) => {
            state.loader = false;
            state.successMessage = payload.message;
        })
        .addCase(user_register.pending, (state, {payload}) => {
            state.loader = true;
        })
        .addCase(user_register.rejected, (state, {payload}) => {
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(user_register.fulfilled, (state, {payload}) => {
            state.loader = false;
            state.successMessage = payload.message;
        })
    }
})

export const {messageClear} = authReducer.actions;
export default authReducer.reducer;