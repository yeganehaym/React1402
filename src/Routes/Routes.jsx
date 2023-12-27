import {BrowserRouter,Routes, Route} from "react-router-dom";
import {Template} from "../Templates/Template";
import {NewProduct} from "../Components/Products/NewProduct";
import {Products} from "../Components/Products/Products";
import {AuthTemplate} from "../Templates/AuthTemplate";
import React from "react";
import {Cal} from "../Tests/Cal";
import {Login} from "../Components/Auth/Login";
import {Songs} from "../Tests/Songs";
import {CheckParams} from "../Tests/CheckParams";
import {Counters} from "../Tests/Counters";
import {Counter} from "../Tests/Counter";
import {HomeUser} from "../Components/Home/HomeUser";
import {Error404} from "../Components/Errors/Error404";
import {CheckOut} from "../Components/Orders/CheckOut";

const AppRoutes=()=>{

    return(<>
        <BrowserRouter>
            <Routes>
                <Route path={"/counter"} element={<Template><Counter/></Template>} />
                <Route path={"/counters"} element={<Template><Counters/></Template>} />
                <Route path={"/products/new"} element={<Template><NewProduct/></Template>} />
                <Route path={"/products/list"} element={<Template ><Products/></Template>} />
                <Route path={"/p/:id/:name"} element={<Template><CheckParams/></Template>} />
                <Route path={"/player"} element={<Songs/>} />
                <Route path={"/login"} element={<AuthTemplate><Login/></AuthTemplate>} />
                <Route path={"/cal"} element={<Cal/>} />
                <Route path={"/"} element={<HomeUser/>} />
                <Route path={"/checkout"} element={<CheckOut/>} />
                <Route path={"*"} element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    </>)
}

export default AppRoutes