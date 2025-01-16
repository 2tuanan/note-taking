import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_note = createAsyncThunk(
    'note/add_note',
    async(note, {rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.post('/add-note', note, {withCredentials: true})
            
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const noteReducer = createSlice({
    name: 'note',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        notes: [],
        totalNotes: 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = '';
            state.successMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(add_note.pending, (state) => {
            state.loader = true;
        })
        .addCase(add_note.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
        })
        .addCase(add_note.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
        })
    }
})

export const {messageClear} = noteReducer.actions;
export default noteReducer.reducer;