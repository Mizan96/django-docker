import { createSlice } from "@reduxjs/toolkit";

const initialState = {data: []};

const videosSlice = createSlice({
    name:'videso',
    initialState,
    reducers: {
        getVideos(state, action){
            state.data = action.payload;
        }
    }
});

export const videosActions = videosSlice.actions;

export default videosSlice;