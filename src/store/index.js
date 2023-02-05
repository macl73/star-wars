import { configureStore } from '@reduxjs/toolkit';
import numberReducer from '../slices/number.js';

const store = configureStore({
    reducer: {
        number: numberReducer
    }
});

export default store;
