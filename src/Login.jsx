import {useState} from "react";
import {axios} from "./AppAxios";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import queryString from 'query-string';

export const Login=()=>{

    const [user,setUser]=useState({
        username:'',
        password:''
    })

    const navigate=useNavigate();

    const loc=useLocation();
    const login=async (e)=>{
        e.preventDefault();

        try{
            const result=await axios.post('http://localhost:4000/api/login',user);
            const {token}=result.data;
            localStorage.setItem('token',token);

            let destination='/';

            const parsed = queryString.parse(loc.search);
            console.log("'" + loc.search + "'");
            if(loc.search!=='')
            {
                destination=parsed.url;
            }

            navigate(destination,{replace:true});
        }
        catch (e)
        {
            console.log(e);
            if(e.response && e.response.status && e.response.status==401)
            {
                toast.error(e.response.data.error,{
                    position:'bottom-center'
                });
            }
        }
    }

    const onInput=(e)=>{
        const {name,value}=e.target;
        const u={...user};
        u[name]=value;
        setUser(u);
    }
    return(<>
    <form style={{minWidth:'300px'}} onSubmit={login}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">نام کاربری</label>
            <input type="text" className="form-control"
                   onInput={onInput}
                   name={"username"} value={user.username} placeholder="نام کاربری"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">کلمه عبور</label>
            <input type="password" className="form-control"
                   onInput={onInput}

                   name={"password"} value={user.password} placeholder="کلمه عبور"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input"  />
                <label className="form-check-label" >مرا به یاد داشته باش</label>
        </div>
        <button type="submit" className="btn btn-primary">ورود</button>
    </form>
    </>)
}