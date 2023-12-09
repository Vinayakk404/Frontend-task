import {configureStore} from '@reduxjs/toolkit';
import { Fetch_Data_Reducer , Select_Data_Reducer } from './Reducer/Reducers';

const store = configureStore({
    reducer : {Fetch_Data_Reducer , Select_Data_Reducer }
})

export default store;