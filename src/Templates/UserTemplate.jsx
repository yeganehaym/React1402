import {useContext} from "react";
import {productStore} from "../Store/ProductStore";
import {ProductContext} from "../Routes/Routes";

export const UserTemplate=props=>{

    const context=useContext(ProductContext);

    const updateSearch=e=>{
        context.setSearch(e.target.value);
    }
    return(<>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand">Navbar : {context.productCount} Products</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" onInput={updateSearch}
                       placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>

        <div>
            {props.children}

        </div>
    </>)
}