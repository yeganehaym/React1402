import {client} from "./AppAxios";
import axios from "axios";
export const newProduct=async (product,callback)=>{
    const formData=new FormData();
    formData.append("name",product.name);
    formData.append("price",product.price);
    formData.append("quantity",product.quantity);
    formData.append("description",product.description);
    formData.append("discount",product.discount);
    formData.append("image",product.image);

    const startTime=new Date();

    return await client.post('/products',formData,{
        contentType:'multipart/form-data',
        onUploadProgress:e=>{
            const {loaded,total}=e;

            const progress=loaded*100/total;
            const elapsedTime=(((new Date())-startTime)/1000);
            const uploadSpeed=loaded/elapsedTime;
            const remainingTime=total/uploadSpeed - elapsedTime;

            const amar={
                progress,
                remainingTime,
                uploadSpeed,
                elapsedTime,
                loaded,
                total
            }

            callback(amar);
            console.log(amar)
        }
    })
}

export const getProducts=async (search)=>{
    return await client.get('/products?search='+search)
}

export const deleteProduct=async (name)=>{
    return await client.delete('/products/' + name)
}

export const getImage=async ()=>{
    return await client.get('/images');
}