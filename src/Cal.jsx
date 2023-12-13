import {useState} from "react";
import axios from 'axios'
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export const Cal=()=>{

    const [date,setDate]=useState(null)
    const [isOff,setIsOff]=useState(false)
    const [events,setEvents]=useState([])

    const getOccasion=()=>{
        if(date==null)
            return;
        const year=date.year;
        const month=date.monthIndex+1;
        const day=date.day;


        try {
            const promise=axios.get(`https://holidayapi.ir/jalali/${year}/${month}/${day}`);
            console.log(promise)
            promise.then(result=>{
                console.log(result);

                const {data}=result;

                setIsOff(data.is_holiday);
                setEvents(data.events)

            })

            promise.catch(data=>{
                console.log(data)
            })
        }
        catch (e)
        {
            console.log(e);
        }
    }

    const getOccasion2=async()=>{
        if(date==null)
            return;
        const year=date.year;
        const month=date.monthIndex+1;
        const day=date.day;


        try {
            const result=await axios.get(`https://holidayapi.ir/jalali/${year}/${month}/${day}`);
            const {data}=result;

            setIsOff(data.is_holiday);
            setEvents(data.events)
        }
        catch (e)
        {
            console.log(e);
        }
    }
    return(<>
        <DatePicker  calendar={persian}
                     locale={persian_fa}
                     value={date}
                     onChange={value=>setDate(value)} />;

        <button className={"btn btn-primary"} onClick={()=>getOccasion2()}>Get Occasion</button>

        {
            isOff==true &&
            <p className={"alert alert-success"}>امروز تعطیله :)</p>
        }

        {
            isOff==false &&
            <p className={"alert alert-danger"}>امروز تعظیل نیست :(</p>
        }

        <ul>
            {
                events && events.length>0 &&
                events.map(e=><li key={e.description}>{e.description}</li>)
            }
        </ul>
    </>)
}