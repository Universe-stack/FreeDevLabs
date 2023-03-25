import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course-slice";
import communitiesSlice from "./communities-slice";

const store = configureStore({
    reducer: {
        course: courseSlice.reducer,
        communities: communitiesSlice.reducer
    }
})

export default store;