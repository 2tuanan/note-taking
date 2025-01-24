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
// End method

export const delete_user = createAsyncThunk(
    'admin/delete_user',
    async(id, {rejectWithValue}) => {
        try {
            const {data} = await api.delete(`/delete-user/${id}`, {withCredentials: true})
            return { message: data.message, id };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
// End method

export const adminReducer = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        successMessage: '',
        errorMessage: '',
        resetLoader: null,
        deleteLoader: null
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
            state.resetLoader = meta.arg;
        })
        .addCase(reset_notes.fulfilled, (state, { payload }) => {
            state.resetLoader = null;
            state.successMessage = payload.message;
            const userIndex = state.users.findIndex((user) => user._id === payload.id);
            if (userIndex !== -1) {
                state.users[userIndex].noteTotal = payload.noteTotal;
            }
        })
        .addCase(reset_notes.rejected, (state, { payload }) => {
            state.resetLoader = null;
            state.errorMessage = payload.error;
        })
        .addCase(delete_user.pending, (state, { meta }) => {
            state.deleteLoader = meta.arg;
        })
        .addCase(delete_user.fulfilled, (state, { payload }) => {
            state.deleteLoader = null;
            state.successMessage = payload.message;
            state.users = state.users.filter((user) => user._id !== payload.id);
        })
        .addCase(delete_user.rejected, (state, { payload }) => {
            state.deleteLoader = null;
            state.errorMessage = payload.error;
        })
    }
})

export const { messageClear } = adminReducer.actions;
export default adminReducer.reducer;