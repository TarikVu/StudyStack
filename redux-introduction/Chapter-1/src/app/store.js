import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore(
    {  
        reducer: {
            // Mount our reducers to the store
            counter: counterReducer
        }
    }
)