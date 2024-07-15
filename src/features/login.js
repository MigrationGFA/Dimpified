
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

// const baseUrl = import.meta.env.Liight_BASE_URL;


export const login = createAsyncThunk('authentication/login', async ({ email, password }, { rejectWithValue }) => {
    // Make an API request to login the user with Axios
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/creator/login`, {
            email,
            password,
        });

        if (response.status === 200) {
            // Login successful
            const user = response.data;
            return user;
        }
    }
    catch (error) {
        if (error.response && error.response.data.message) {
            console.log("this is if error")
            return rejectWithValue(error.response.data.message)
        } else {
            console.log("this is else error")

            return rejectWithValue(error.message)
        }
    }
});



export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        logout: (state) => {
            // Reset user data when logging out
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = "";
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload;
            });
    }
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;

