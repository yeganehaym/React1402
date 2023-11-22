import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {List} from "./List";
import RatingBar from "./RatingBar";
import Image from "./Image";
import ImageList from "./ImageList";
import {Counters} from "./Counters";
import {Form} from "./Form";
import {Prodcus} from "./Prodcus";
import {Products2} from "./Products2";
import {NewProduct} from "./NewProduct";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>

<NewProduct/>

    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
