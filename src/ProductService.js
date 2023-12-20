import {client} from "./AppAxios";
export const newProduct=async product=>{
    return await client.post('/products',product)
}

export const getProducts=async ()=>{
    return await client.get('/products')
}

export const deleteProduct=async (name)=>{
    return await client.delete('/products/' + name)
}