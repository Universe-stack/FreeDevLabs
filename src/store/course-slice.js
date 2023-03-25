import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        course: [
            {
                id: 1,
                name: "Web development",
                niches: true,
                type: [
                    {
                        id:1,
                        name:"Front-end",
                        techs:[
                            {
                                id:1,
                                name: "HTML",
                                title: "HTML"
                            },
                            {
                                id:2,
                                name: "CSS",
                                title: "CSS"
                            }
                        ]
                    },
                    {
                        id:2,
                        name:"Back-end",
                        techs:[
                            {
                                id:1,
                                name: "Node JS",
                                title: "Node JS"
                            },
                            {
                                id:2,
                                name: "Python",
                                title: "Python"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Data Analysis",
                niches: false,
            }
        ]
    },
    reducers :{
        addReducer(){}
    }
});

export const courseActions = courseSlice.actions;

export default courseSlice;