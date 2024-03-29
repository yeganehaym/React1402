import {useContext, useEffect, useState} from "react";
import {ProductItem} from "../Shared/ProductItem";
import * as productService from '../../Services/ProductService'
import {CartItem} from "../Shared/CartItem";
import {useNavigate} from "react-router-dom";
import {ProductContext} from "../../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";

export const HomeUser=(props)=>{

    const [products,setProducts]=useState([]);
    const [products2,setProducts2]=useState([]);
    const context=useContext(ProductContext);

    const getProducts=async ()=>{

        try {
            const result=await productService.getProducts(context.search);
            const {data:products}=result;
            setProducts(products);
            setProducts2(products);


        }
        catch (e)
        {
            console.log(e)
        }
    }

    useEffect(()=>{

        const fetch=async()=>{
            await getProducts();
        }
        fetch();

    },[])

    useEffect(()=>{

        let p=[...products2];
        p=p.filter(x=>{
            return x.name.toLowerCase().includes(context.search.toLowerCase());
        });

        setProducts(p);

    },[context])


    const [cart,setCart]=useState([]);
    const addToCart=product=>{
        const carts=[...cart];
        let item=carts.find(i=>i.product===product);
        if(item)
        {
            item.quantity++;
        }
        else{
            item={
                product,
                quantity:1
            }
            carts.push(item);
        }
        setCart(carts)
    }

    const removeFromCart=(cartItem)=>{
        let carts=[...cart];
        carts=carts.filter(item=>item!==cartItem)
        setCart(carts);
    }

    const navigate=useNavigate();
    const checkOut=()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
        navigate('/checkout')
    }

    const {theme}=useSelector(state=>state.theme)
    const dispatch=useDispatch();

    return(
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <div className={"row"}>
                            {
                                cart && cart.length>0 &&
                                cart.map(c=><div className={"col-12"}>
                                    <CartItem onRemove={item=>removeFromCart(item)} item={c} />
                                </div> )
                            }

                        </div>
                        <div style={{display:"flex",justifyContent:'center'}}>
                            <button onClick={()=> checkOut()} disabled={!(cart && cart.length>0)} className={"btn btn-primary"}>Check Out</button>
                        </div>
                    </div>
                    <div className={"col-md-8"}>

                        <div className={"row"}>

                            <div className={"alert alert-info"}>
                                {process.env.REACT_APP_Text}
                            </div>

                                {
                                    products && products.length>0 &&
                                    products.map(product=><div className={"col-md-4"}>
                                        <ProductItem onAdd={()=>addToCart(product)} product={product}/>
                                    </div>)
                                }


                                <button type={"button"} className={"btn btn-success"} onClick={()=>context.setCount(products.length)}>Update {context.search}</button>
                                <button type={"button"} className={"btn btn-danger"} onClick={()=>dispatch({type:'CHANGE',payload:(theme==='dark'?'light':'dark')})}>Update {context.search}</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}