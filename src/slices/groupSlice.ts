import { createSlice } from "@reduxjs/toolkit";
import { group, valve } from "../api/api";

export const groupSlice = createSlice({
    name: "group",
    initialState: {
        groups: new Array<group> 
    },
    reducers: {
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        },
        removeGroup: (state, action) => {
            state.groups = state.groups.filter((group) => group.name !== action.payload);
        },
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        
    }
});

export const { addGroup, removeGroup, setGroups } = groupSlice.actions;
export default groupSlice.reducer;