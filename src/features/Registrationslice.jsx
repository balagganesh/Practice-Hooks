import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const RegistrationSlice = createSlice({

    name:"Registration",
    initialState,
    reducers:{
        Adduser :(state,action) =>{
            state.push(action.payload)
        }
    }
})

export const { Adduser } = RegistrationSlice.actions;
export const registrationReducer = RegistrationSlice.reducer;