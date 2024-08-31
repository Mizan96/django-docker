import {createSlice} from '@reduxjs/toolkit';


const initialState = {data: []};

const categorySlicer = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getCategory(state, action){
            state.data = action.payload;
        }
    }
});

export const categoryActions = categorySlicer.actions;

export default categorySlicer;