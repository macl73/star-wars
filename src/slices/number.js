import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        value: 0
    },
    reducers: {
        number(state, action) {
            state.value = action.payload;
        }
    }
});


export const { number } = numberSlice.actions;
export default numberSlice.reducer;