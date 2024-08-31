import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const registerSlice =createSlice( {
    name: 'register',
    initialState,
    reducers: {
        getRegistrationInfo(state, action){
            state.data = action.payload;
        }
    }
});

export const resgisterActions = registerSlice.actions;

export default registerSlice;