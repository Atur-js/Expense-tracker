import { combineReducers, createStore } from "redux";

import {expenseReducer} from "../reducers/reducers";

const reducer = combineReducers ({
    expense: expenseReducer,
});

const initialState = {};
const store = createStore(reducer, initialState);
export default store;