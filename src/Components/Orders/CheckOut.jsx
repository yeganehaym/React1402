import {useEffect, useState} from "react";
import * as orderService from '../../Services/OrderService'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export  const CheckOut=()=>{

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const carts=JSON.parse(localStorage.getItem('cart'));
        setCart(carts);
    },[])

    const [user,setUser]=useState({
        fullName:'',
        mobileNo:'',
        address:''
    })

    const onInput=e=>{
        const {name,value}=e.target;
        /*const u={...user};
        u[name]=value;
        setUser(u);*/
        setUser({...user, [name]:value})
    }

    const navigate=useNavigate();
    const submit=async e=>{
        e.preventDefault();

        try {
            const result=await orderService.newOrder(cart,user);
            if(result.status===200)
            {
                toast.success('Order is Created');
                navigate('/');
            }
        }
        catch (e) {

        }

    }
    return (<>
    <form onSubmit={submit}>
        <div className={"form-group"}>
            <input type={"text"} name={"fullName"} value={user.fullName} onInput={onInput} className={"form-control"} placeholder={"Full Name"}/>
        </div>
        <div className={"form-group"}>
            <input type={"text"} name={"mobileNo"} value={user.mobileNo} onInput={onInput} className={"form-control"} placeholder={"Mobile No"}/>
        </div>
        <div className={"form-group"}>
            <textarea cols={80} name={"address"} value={user.address} onInput={onInput} rows={3} className={"form-control"} placeholder={"Address"}></textarea>
        </div>
        <div className={"form-group"}>
            <button className={"btn btn-primary"}>Submit</button>
        </div>
    </form>
    </>)
}