import {ADD_Wallet} from "../Actions";

export const init ={
    wallet:1000
}

export const FinancialReducer=(state=init,action)=>{

    if(action.type===ADD_Wallet)
    {
        const s={...state};
        s.wallet+=action.payload;
        return s;
    }
    else if(action.type==='SUB')
    {
        const s={...state};
        s.wallet-=action.payload;
        return s;
    }
    else if(action.type==='ZERO')
    {
        const s={...state};
        s.wallet=0;
        return s;
    }

    return state;
}