import {client} from "./AppAxios";

export const newOrder=async (cart,user)=>{
    const data={
        cart,
        user
    };
    return await client.post('/orders',data);
}

export const getOrders=async ()=>{

    const result=await client.get('/orders');
    const {data}=result;

    const arrays=[];
    for (let i=0;i<data.length;i++)
    {
        const item=data[i];
        const carts=item.cart;

        let quantity=0;
        let price=0;
        for (let p=0;p<carts.length;p++)
        {
            quantity+=carts[p].quantity;
            price+=carts[p].product.price *carts[p].quantity;
        }

        let o={
            name:item.user.fullName,
            mobileNo:item.user.mobileNo,
            address:item.user.address,
            quantity,
            price,
        }
        arrays.push(o)
    }

    console.log(arrays)
return arrays;
}