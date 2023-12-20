import {useState} from "react";
import Joi from 'joi'
import {messages} from "./joi_translation";
import {Await, useNavigate} from "react-router-dom";
import {client} from "./AppAxios";
import {toast} from "react-toastify";
import * as productService from "./ProductService";

export const NewProduct=(props)=>{


    const [product,setProduct]=useState({
        id:0,
        name:'',
        price:0,
        discount:0,
        quantity:0,
        image:'',
        code:'',
        description:''
    })

    const updateValues=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        const p={...product};
        p[name]=value;
        setProduct(p);

    }

    const navigate=useNavigate()

    const save=async (e)=>{
        e.preventDefault();

        const validateResult=validate();
        if(validateResult==false)
            return


        //save

        try {
            const result=await productService.newProduct(product)
            const {data}=result;
            toast.success(data.message);
        }
        catch (e)
        {
            toast.error('خطا در درج محصول')
        }



    }

    const schema=Joi.object({
        code:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('کد'),
        name:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('نام'),
        quantity:Joi.number()
            .integer()
            .required(),
        price:Joi.string()
            .pattern(/^\d+$/)
            .min(0)
            .required(),
        description:Joi.string()
            .max(500)
            .required(),
    })
    const validate=()=>{

        const result=schema.validate(product,
            {abortEarly:false,allowUnknown:true,messages:messages,errors:{language:"en"}})
        console.log(result);


        let validate=true;
        if(result.error && result.error.details && result.error.details.length>0)
        {
            validate=false;
            const details=result.error.details;
            const errorMessages=details.map(error=> ({message:error.message,type:error.type,path:error.path[0]}));


            setErrors(errorMessages);
        }
        return validate;

    }

    const [errors,setErrors]=useState([]);

    const get=name=>{

        let value='';
        for (let i=0;i<errors.length;i++)
        {
            if(errors[i].path==name){
                value=errors[i].message;
                break
            }
        }
        return value;
    }
    return(
        <>
        <div className={"card"}>
            <div className={"card-header"}>
                <h1 className={"card-title"}>New Product</h1>
            </div>
            <div className={"card-body"}>

                {
                    errors && errors.length>0 &&
                        <div className={"alert alert-danger"}>

                                <ul>
                                    {errors.map(err=><li key={err.message}>{err.message}</li>)}
                                </ul>

                        </div>
                }
                <form method={"post"} onSubmit={save}>
                    <div className={"form-group"}>
                     <label>Code:</label>
                    <input onInput={e=>updateValues(e)} className={"form-control"} type={"text"} name={"code"} value={product.code}/>
                        <small className={"text-danger"}>{get('code')}</small>
                    </div>

                    <div className={"form-group"}>
                        <label>Name:</label>
                        <input onInput={e=>updateValues(e)} className={"form-control"} type={"text"} name={"name"} value={product.name}/>
                        <small className={"text-danger"}>{get('name')}</small>
                    </div>

                    <div className={"form-group"}>
                        <label>Quantity:</label>
                        <input onInput={e=>updateValues(e)} className={"form-control"} type={"number"} name={"quantity"} value={product.quantity}/>
                    </div>

                    <div className={"form-group"}>
                        <label>price:</label>
                        <input onInput={e=>updateValues(e)} className={"form-control"} type={"number"} name={"price"} value={product.price}/>
                    </div>

                    <div className={"form-group"}>
                        <label>Discount:</label>
                        <input onInput={e=>updateValues(e)} className={"form-control"} type={"number"} name={"discount"} value={product.discount}/>
                    </div>

                    <div className={"form-group"}>
                        <label>Description:</label>
                        <textarea onInput={e=>updateValues(e)} className={"form-control"} name={"description"} value={product.description} rows={5} cols={80}></textarea>
                    </div>

                    <div className={"form-group"}>
                        <label>Image:</label>
                        <input type={"image"} name={"image"} />
                    </div>
                    <div className={"form-group"}>
                        <button type={"submit"} className={"btn btn-primary"}>Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}