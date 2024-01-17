import {combineReducers} from "redux";
import {ThemeReducer} from "./ThemeReducer";
import {FinancialReducer} from "./FinancialReducer";
import {ProductReducer} from "./ProductReducer";

export  const Reducer=combineReducers({theme:ThemeReducer,
    fine:FinancialReducer,
    product:ProductReducer});