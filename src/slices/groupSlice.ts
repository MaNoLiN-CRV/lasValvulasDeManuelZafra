import { createSlice } from "@reduxjs/toolkit";
import { group } from "../api/api";
export const groupSlice = createSlice({
    name: "group",
    initialState: {
        groups: Array<group>
    },
    reducers: {
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        }
    }
});