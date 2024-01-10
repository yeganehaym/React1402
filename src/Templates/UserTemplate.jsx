import {useContext, useEffect} from "react";
import {productStore} from "../Store/ProductStore";
import {ProductContext} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {ADD_Wallet, AddToWallet, SubFromWallet} from "../Actions";

export const UserTemplate=props=>{

    const context=useContext(ProductContext);

    const updateSearch=e=>{
        context.setSearch(e.target.value);
    }

    const {wallet}=useSelector(state => state.fine);
    const {theme}=useSelector(state => state.theme);

    const dispatch=useDispatch();


    console.log(wallet);
    return(<>
        <nav className={theme==='dark'?"navbar navbar-dark bg-dark justify-content-between":"navbar navbar-light bg-light justify-content-between"}>
            <a className="navbar-brand">Wallet : {wallet}  Navbar : {context.productCount} Products</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" onInput={updateSearch}
                       placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>

        <button className={"btn btn-success"} onClick={()=>dispatch(AddToWallet(1000))}>Add To Wallet 1000</button>
        <button className={"btn btn-warning"} onClick={()=>dispatch(SubFromWallet(500))}>SUB To Wallet 500</button>
        <button className={"btn btn-danger"} onClick={()=>dispatch({type:'ZERO'})}>No Money</button>
        <div>
            {props.children}

        </div>
    </>)
}