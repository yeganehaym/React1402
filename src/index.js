import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {ToastContainer} from "react-toastify";
import AppRoutes from "./Routes/Routes";
import {createStore} from "redux";
import {Reducer} from "./Reducers";
import {Provider} from "react-redux";
import './Utilities/I18N'

const root = ReactDOM.createRoot(document.getElementById('root'));
export  const store=createStore(Reducer);
root.render(

    <>
    <Provider store={store}>
<ToastContainer />

        <AppRoutes  />

    </Provider>
    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
