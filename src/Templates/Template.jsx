import {Sidebar} from "./Sidebar";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {isValid} from "../JwtService";

export const Template=props=>{

    const navigate=useNavigate();
    const loc=useLocation();
    useEffect(()=>{

        if(isValid()==false)
        {
            const url=loc.pathname;
            navigate('/login?url=' + url);
        }


    },[])
    return(<>

        <div className="wrapper">

            <NavBar/>

            <Sidebar/>

            <div className="content-wrapper">

                <section className="content">


                    {

                        props.children
                    }

                </section>
            </div>


<Footer/>
        </div>
        
        
    </>)
}