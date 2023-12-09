import {UserNav} from "./UserNav";
import {Link} from "react-router-dom";

export const Sidebar=()=>{

    return(<>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="../../index3.html" className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                     style={{opacity:'0.8'}} />
                <span className="brand-text font-weight-light">پنل مدیریت</span>
            </a>


        <div className="sidebar">
            <div>
<UserNav/>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className={"nav-item"}>
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fa fa-dashboard"></i>
                                <p>
                                    داشبورد
                                    <i className="right fa fa-angle-left"></i>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-cubes"></i>
                                <p>
                                    محصولات
                                    <i className="right fa fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="products/new" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"></i>
                                        <p>درج محصول جدید</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/products/list"} className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"></i>
                                        <p>لیست محصولات</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-cart-flatbed"></i>
                                <p>
                                    سفارشات
                                    <i className="right fa fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/orders/list" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"></i>
                                        <p>لیست سفارشات</p>
                                    </Link>
                                </li>


                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>

    </>)
}