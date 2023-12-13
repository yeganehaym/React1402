import {Sidebar} from "./Sidebar";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Template=props=>{

    const navigate=useNavigate();
    useEffect(()=>{
        //if(!props.show || props.show==false)
          //  navigate('/login')

    },[])
    return(<>

        <div className="wrapper">

            <NavBar/>

            <Sidebar/>

            <div className="content-wrapper">

                <section className="content">


                    {
                        props.show && props.show==true &&
                        props.children
                    }

                </section>
            </div>


<Footer/>
        </div>
        
        
    </>)
}