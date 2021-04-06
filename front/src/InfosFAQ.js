import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "./Tabs";
import Faq from "./Faq";
import ListInfo from "./Info";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Info from "./notification";
import InfoGeneral from "./notificationgeneral";

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

                <div className={"Notifaction-home"}>
                    <Info></Info>
                </div>
                <div className={"Notifaction-home2"}>
                    <InfoGeneral></InfoGeneral>
                </div>

                <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Informations">
                            <ListInfo></ListInfo>
                    </div>
                    
                    <div title="Foire aux Questions" > 
                        <Faq></Faq>
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

                    <div className={"Notifaction-home"}>
                        <Info></Info>
                    </div>
                    <div className={"Notifaction-home2"}>
                        <InfoGeneral></InfoGeneral>
                    </div>

                <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Informations">
                            <ListInfo></ListInfo>
                    </div>

                    <div title="Foire aux Questions" > 
                        <Faq></Faq>
                    </div>
    
                    
                </Tabs>

                </div>
                <Footer></Footer>
            </div>
        )
    }


}


export default InfosFAQ;