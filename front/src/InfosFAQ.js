import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "./Tabs";
import Faq from "./Faq";
import Info from "./Info";
import Notification from "./notification";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";

const InfosFAQ = () => {
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
                <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Foire aux Questions" > 
                        <Faq></Faq>
                    </div>
    
                    <div title="Informations">
                        <Info></Info>
                    </div>
                </Tabs>

                </div>
                <Footer></Footer>
            </div>
        )
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
                {/*JSON.stringify(infosfaqDatas)*/}
                <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Foire aux Questions" > 
                        <Faq></Faq>
                    </div>
    
                    <div title="Informations">
                        <Info></Info>
                    </div>
                </Tabs>

                </div>
                <Footer></Footer>
            </div>
        )
    }


}


export default InfosFAQ;