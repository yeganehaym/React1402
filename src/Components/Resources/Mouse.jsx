import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Mouse=()=>{

    const [position,setPosition]=useState({
        x:0,y:0
    })

    const [online,setOnline]=useState(true);

    const [coords,setCoords]=useState({
        lat:0,
        lng:0
    })

    const [watchId,setWatchId]=useState(0)
    const mousePosition=e=>{
        setPosition({x:e.offsetX,y:e.offsetY});
    }

    const checkOnline=()=>{
        setOnline(true)
    }
    const checkOffline=()=>{
        setOnline(false);
    }

    const setGPS=e=>{
        console.log(e)
        setCoords({
            lat:e.coords.latitude,
            lng:e.coords.longitude
        })
    }
    useEffect(()=>{
        window.addEventListener("mousemove",mousePosition)
        window.addEventListener("online",checkOnline)
        window.addEventListener("offline",checkOffline)
        const code=navigator.geolocation.watchPosition(setGPS);
        setWatchId(code)

        return ()=>{
            window.removeEventListener("mousemove",mousePosition)
            window.removeEventListener("online",checkOnline)
            window.removeEventListener("offline",checkOffline)
            navigator.geolocation.clearWatch(watchId);
        }
    },[])

    const showInternetStatus=()=>{

        if(online)
            return <span className={"badge bg-success"}>YES</span>

        return <span className={"badge bg-danger"}>NO</span>

    }
    return(<>

            <div style={{textAlign:"left",direction:"ltr",margin:'50px'}}>
            <p>
                <strong>X:</strong>{position.x}
            </p>
            <p>
                <strong>Y:</strong>{position.y}
            </p>
                <p>
                    <h5>Internet</h5>
                    <strong>Internet Status:</strong>{showInternetStatus()}
                </p>

                <p>
                    <h5>Location</h5>
                    <strong>Latitude:</strong>{coords.lat}
                    <br/>
                    <strong>Longitude:</strong>{coords.lng}
                </p>
                <Link to={"/"}>Home</Link>
            </div>
        </>
    )
}