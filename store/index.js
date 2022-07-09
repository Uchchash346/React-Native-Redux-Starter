import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

//  Create Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
})

// 2. Create store
const store = configureStore({
    reducer: rootReducer,
})

export default store;