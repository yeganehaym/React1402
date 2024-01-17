
export const init ={
    refresh:false
}

export const ProductReducer=(state=init,action)=>{

    if(action.type==='UPDATE')
    {
        state.refresh=action.payload
    }
    return state;

}
