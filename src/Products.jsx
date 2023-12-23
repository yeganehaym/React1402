import {useEffect, useState} from "react";
import {client} from "./AppAxios";
import * as productService from "./ProductService";
import {toast} from "react-toastify";
import RatingBar from "./RatingBar";

export const Products=()=>{

    const [products,setProducts]=useState([])
    const [image,setImage]=useState('')
    useEffect(()=>{

        const fetchData=async ()=>{
            await getProducts()
            const result=await productService.getImage();
            setImage('data:image/jpeg;base64,' + result.data.image);
        }

        fetchData()

    },[])

    const getProducts=async ()=>{
        try {
            const result=await productService.getProducts()
            const {data:products}=result;
            setProducts(products)
        }
        catch (e)
        {

        }
    }

    const del=async (name)=>{
        const result=await productService.deleteProduct(name)
        if(result.data)
        {
            let p=[...products];
            p=p.filter(x=>x.name!=name);
            setProducts(p)
            toast.success(result.data.message);
        }
    }

    const showToast=e=>{
        toast('Your rating registered successfully ' + e.rate + ' of ' +e.rateCount ,{
            position:"bottom-center",
            hideProgressBar: false,
        })
    }

    return (<>
        <table className={"table table-bordered table-striped"}>
            <thead>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Description</th>
                <th>Rate</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

            {
                products && products.length>0 &&
                products.map((product,index)=>
                    <tr key={index}>
                        <td>{(index+1)}</td>
                        <td>
                            {
                                product.image && product.image!='' &&
                                <img style={{width:'200px'}} src={'data:image/jpeg;base64,' + product.image} />

                            }
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.discount}</td>
                        <td>{product.description}</td>
                        <td>
                            <RatingBar onRateSet={e=> showToast(e)} />
                        </td>
                        <td>
                            <button className={"btn btn-danger"} onClick={()=>del(product.name)}>Delete</button>
                        </td>
                    </tr>
                )
            }

            </tbody>
        </table>

    </>)
}