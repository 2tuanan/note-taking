import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_users = createAsyncThunk(
    'admin/get_users',
    async(_, {rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get('/get-users', {withCredentials: true})
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const adminReducer = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        totalUsers: 0
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_users.fulfilled, (state, { payload }) => {
            state.users = payload.users;
            state.totalUsers = payload.totalUsers;
        })
    }
})

export default adminReducer.reducer;