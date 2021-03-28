import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

export default function Faq()  {
    const [cookies, removeCookie] = useCookies(['login']);
    let [infosfaqDatas, setInfosFAQDatas] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://localhost:8000/api/faqs')
            .then(datas => {
                setInfosFAQDatas(datas.data["hydra:member"])
            })
    }, []);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu"}>
                <MenuConnected disconnect={e => disconnect()}/>
                {infosfaqDatas.map(infosfaqData =>
                    <div className={"card-faq"}>
                        <h3>{infosfaqData.question}</h3>
                        <p>{infosfaqData.reponse}</p> 
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
                {infosfaqDatas.map(infosfaqData =>
                    <div className={"card-faq"}>
                        <h3>{infosfaqData.question}</h3>
                        <p>{infosfaqData.reponse}</p> 
                    </div>
                )}
            </div>
    
        )
    }


    
}
