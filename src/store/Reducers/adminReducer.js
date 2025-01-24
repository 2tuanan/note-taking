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
// End method

export const reset_notes = createAsyncThunk(
    'admin/reset_notes',
    async(id, {rejectWithValue}) => {
        try {
            const {data} = await api.delete(`/reset-user/${id}`, {withCredentials: true})
            return { message: data.message, id, noteTotal: data.noteTotal };
        } catch (error) {
           return rejectWithValue(error.response.data);
        }
    }
)

export const adminReducer = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        successMessage: '',
        errorMessage: '',
        loader: null
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = '';
            state.successMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_users.fulfilled, (state, { payload }) => {
            state.users = payload.users;
        })
        .addCase(reset_notes.pending, (state, { meta }) => {
            state.loader = meta.arg;
        })
        .addCase(reset_notes.fulfilled, (state, { payload }) => {
            state.loader = null;
            state.successMessage = payload.message;
            const userIndex = state.users.findIndex((user) => user._id === payload.id);
            if (userIndex !== -1) {
                state.users[userIndex].noteTotal = payload.noteTotal;
            }
        })
        .addCase(reset_notes.rejected, (state, { payload }) => {
            state.loader = null;
            state.errorMessage = payload.error;
        })
    }
})

export const { messageClear } = adminReducer.actions;
export default adminReducer.reducer;