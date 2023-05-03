import { useEffect } from "react";

import { createSlice } from "@reduxjs/toolkit";




const courseSlice = createSlice({
    name: 'course',
    initialState: {
        course:[]
    },
    reducers :{
        populateData: (state,action)=> {
            console.log(action.payload.niches)
            return {
                ...state,
                course: action.payload
            }
            
        }
    }
});






 

export const courseActions = courseSlice.actions;

export default courseSlice;