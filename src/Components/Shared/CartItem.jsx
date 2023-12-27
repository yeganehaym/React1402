import {Image} from "./Image";

export const CartItem=props=>{

    return(<>
    <div style={{minHeight:'100px',border:'1px solid gray'}}>
        <Image height={100} base64={props.item.product.image} />
        <strong> {props.item.product.name}</strong>
        <div>
        <span>× {props.item.quantity}</span>
        </div>
        <button className={"btn btn-danger"} onClick={()=> props.onRemove(props.item) }>
            <i className={"fa fa-trash-o"}></i> Delete
        </button>
    </div>
    </>)
}