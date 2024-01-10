export const ADD_Wallet='ADD'
export const Sub_Wallet='SUB'

export const AddToWallet=(amount)=>{
    return{
        type:ADD_Wallet,
        payload:amount
    }
}

export const SubFromWallet=(amount)=>{
    return{
        type:Sub_Wallet,
        payload:amount
    }
}
