export const Login=()=>{
    return(<>
    <form style={{minWidth:'300px'}}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">نام کاربری</label>
            <input type="text" className="form-control"  placeholder="نام کاربری"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">کلمه عبور</label>
            <input type="password" className="form-control"  placeholder="کلمه عبور"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input"  />
                <label className="form-check-label" >مرا به یاد داشته باش</label>
        </div>
        <button type="submit" className="btn btn-primary">ورود</button>
    </form>
    </>)
}