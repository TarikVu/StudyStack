import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    // Reducer for state changes:
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 }
    }
});

// Both exports are needed (the actions, and the reducer itself).
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;