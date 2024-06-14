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
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 },

        incrementByAmount: (state, actions) => {
            state.count += actions.payload;

        }
    }
});

// Both exports are needed (the actions, and the reducer itself).
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;