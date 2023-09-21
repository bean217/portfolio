import { configureStore } from '@reduxjs/toolkit';

// reducers
import counterReducer from './features/counter'

// setup store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});