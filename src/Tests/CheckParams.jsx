import {useLocation, useParams} from "react-router-dom";

export const CheckParams=()=>{

    const params=useParams();
    const loc=useLocation();

    return(<>

        <h1>id : {params.id}</h1>
        <h5>{params.name}</h5>
        <p>
            Host:{loc.hostname}
        </p>
        <p>
           Protocol: {loc.protocol}
        </p>
        <p>
          Origin  {loc.origin}
        </p>
        <p>
           Href: {loc.href}
        </p>
        <p>
           Path= {decodeURI(loc.pathname)}
        </p>
    </>)
}