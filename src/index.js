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
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {CheckParams} from "./CheckParams";
import {Songs} from "./Songs";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>

        <BrowserRouter>
            <Routes>
                <Route path={"/counter"} element={<Home><Counter/></Home>} />
                <Route path={"/counters"} element={<Home><Counters/></Home>} />
                <Route path={"/"} element={<Home/>} />
                <Route path={"/products/new"} element={<Home><NewProduct/></Home>} />
                <Route path={"/p/:id/:name"} element={<Home><CheckParams/></Home>} />
                <Route path={"/player"} element={<Songs/>} />
            </Routes>
        </BrowserRouter>

    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
