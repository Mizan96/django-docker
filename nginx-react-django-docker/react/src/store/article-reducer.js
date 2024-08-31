import {createSlice} from '@reduxjs/toolkit';


const initialState = {data: []};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews(state, action){
            state.data = action.payload;
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;