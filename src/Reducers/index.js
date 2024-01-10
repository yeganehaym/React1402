import {combineReducers} from "redux";
import {ThemeReducer} from "./ThemeReducer";
import {FinancialReducer} from "./FinancialReducer";

export  const Reducer=combineReducers({theme:ThemeReducer,fine:FinancialReducer});