import { createSlice } from "@reduxjs/toolkit";

const communitiesSlice = createSlice({
    name:'communities',
    initialState: {communities: "Noida"},
    reducers: {
        addReducer(){}
    }
})

export const communitiesActions = communitiesSlice.actions;

export default communitiesSlice;