import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';

//  Create Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})

// 2. Create store
const store = configureStore({
    reducer: rootReducer,
})

export default store;