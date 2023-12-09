export const NavBar=()=>{
    return(<>
        <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="../../index3.html" className="nav-link">خانه</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">تماس</a>
                </li>
            </ul>

            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                        <a href="#" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 ml-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        حسام موسوی
                                        <span className="float-left text-sm text-danger"><i className="fa fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">با من تماس بگیر لطفا...</p>
                                    <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3"/>
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        پیمان احمدی
                                        <span className="float-left text-sm text-muted"><i className="fa fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">من پیامتو دریافت کردم</p>
                                    <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        سارا وکیلی
                                        <span className="float-left text-sm text-warning"><i className="fa fa-star"></i></span>
                                    </h3>
                                    <p className="text-sm">پروژه اتون عالی بود مرسی واقعا</p>
                                    <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i>4 ساعت قبل</p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item dropdown-footer">مشاهده همه پیام‌ها</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                        <span className="dropdown-item dropdown-header">15 نوتیفیکیشن</span>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fa fa-envelope ml-2"></i> 4 پیام جدید
                            <span className="float-left text-muted text-sm">3 دقیقه</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fa fa-users ml-2"></i> 8 درخواست دوستی
                            <span className="float-left text-muted text-sm">12 ساعت</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fa fa-file ml-2"></i> 3 گزارش جدید
                            <span className="float-left text-muted text-sm">2 روز</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item dropdown-footer">مشاهده همه نوتیفیکیشن</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                        className="fa fa-th-large"></i></a>
                </li>
            </ul>
        </nav>


    </>)
}