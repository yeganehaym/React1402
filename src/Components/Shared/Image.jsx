export const Image=props=>{
    return(
        <>
        <img style={{objectFit:"cover",width:'100%',height:(props.height??300) + 'px'}} src={'data:image/jpeg;base64,' + props.base64} />
        </>
    )
}