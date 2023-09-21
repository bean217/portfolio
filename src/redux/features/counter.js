import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        increment: (state) => {
            // we are not actually mutating state here
            // the immer library makes this immutable under the hood
            state.value += 1;
        },
        // decrement
        decrement: (state) => {
            state.value -= 1;
        },
        // incrementByAmount
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;