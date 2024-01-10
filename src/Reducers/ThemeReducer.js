const init={
    theme:'dark'
}

export const ThemeReducer=(state=init,action)=>{

    if(action.type==='CHANGE')
    {
        const s={...state};
        s.theme=action.payload;
        return s;
    }

    return  state;
}