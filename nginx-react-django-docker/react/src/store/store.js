import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./article-reducer";
import videosSlice from "./videos-reducer";
import artticleDetailSlice from "./artcile-detail-reducer";
import categorySlicer from "./category-list-reducer";
import registerSlice from "./register-reducer";


const store  = configureStore({
    reducer: {
                news: newsSlice.reducer,
                videos: videosSlice.reducer,
                articleDetail: artticleDetailSlice.reducer,
                category: categorySlicer.reducer,
                register: registerSlice.reducer,
            },
})

export default store;