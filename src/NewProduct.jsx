import {useState} from "react";
import Joi from 'joi'
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
    const save=(e)=>{
        e.preventDefault();

        const validateResult=validate();
        if(validateResult==false)
            return


        //save
    }

    const schema=Joi.object({
        code:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        name:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        quantity:Joi.string()
            .pattern(/^\d+$/)
            .required(),
        price:Joi.string()
            .pattern(/^\d+$/)
            .min(0)
            .required(),
        description:Joi.string()
            .alphanum()
            .max(500)
            .required(),
    })
    const validate=()=>{

        const result=schema.validate(product,{abortEarly:false,allowUnknown:true})
        console.log(result);

    }

    return(
        <>
        <div className={"card"}>
            <div className={"card-header"}>
                <h1 className={"card-title"}>New Product</h1>
            </div>
            <div className={"card-body"}>
                <form method={"post"} onSubmit={save}>
                    <div className={"form-group"}>
                     <label>Code:</label>
                    <input onInput={e=>updateValues(e)} className={"form-control"} type={"text"} name={"code"} value={product.code}/>
                    </div>

                    <div className={"form-group"}>
                        <label>Name:</label>
                        <input onInput={e=>updateValues(e)} className={"form-control"} type={"text"} name={"name"} value={product.name}/>
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