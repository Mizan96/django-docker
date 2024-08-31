import { createSlice } from "@reduxjs/toolkit";

const initialState = {
                      data: [],
                      author: '',
                      category: '',
                    };

const artticleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
        getArticleDetail(state, action){
            state.data = action.payload;
            state.author = state.data.author.name
            state.category = state.data.category.category
        }
    }
});


export const artticleDetialActions = artticleDetailSlice.actions;

export default artticleDetailSlice;
