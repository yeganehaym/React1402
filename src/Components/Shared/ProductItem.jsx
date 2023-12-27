import RatingBar from "./RatingBar";
import {toast} from "react-toastify";
import {Image} from "./Image";

export const ProductItem=props=>{
    return(<>
        <div className="card" >
            <Image base64={props.product.image}></Image>
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">
                        <RatingBar rate={props.product.rate} onRateSet={e=>toast.info('You have rated ' + e.rate)} />
                        {props.product.description}
                    </p>
                    <p>

                    </p>
                    <a onClick={()=>props.onAdd()} className="btn btn-primary">Add to Cart</a>
                </div>
        </div>
    </>)
}