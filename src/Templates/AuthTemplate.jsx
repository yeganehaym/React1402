export const AuthTemplate=props=>{

    return(<>
    <div style={{backgroundColor:'gray',height:'100vh'}} className={"d-flex justify-content-center align-items-center "}>

            <div className={"card"} >
                <div className={"card-body"}>

                    {props.children}
                </div>
            </div>

    </div>
    </>)
}