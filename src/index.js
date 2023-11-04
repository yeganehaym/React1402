import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {List} from "./List";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>

<Counter value={5} step={2} name="Counter 1"/>
        <br/>
<Counter value={-20} name={"Counter 2"}/>
        <br/>
<Counter name={"counter 3"} step={5} />

        <List />

    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
