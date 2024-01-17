import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
export const MultiLanguage=()=>{

    const [language,setLanguage]=useState('en');
    const [languages,setLanguages]=useState(['en','fa'])


    const { t,i18n } = useTranslation();

    const changeLanguage=lang=>{
        i18n.changeLanguage(lang);
        localStorage.setItem('lang',lang);
    }

    useEffect(()=> {
        const lang=localStorage.getItem('lang');
        if(lang)
        {
            i18n.changeLanguage(lang);
        }

},[])
    return(
        <>
<h1>{t('Hello')}</h1>
<h1>{t('Welcome to React',{})}</h1>
<h1>{t('age',{age1:12,age2:28})}</h1>

            <br/>
            <button className={"btn btn-primary"} onClick={()=>changeLanguage('fa')}>Switch To Persian</button>

            <br/>
            <button className={"btn btn-danger"} onClick={()=>changeLanguage('en')}>Switch To English</button>

        </>
    )
}