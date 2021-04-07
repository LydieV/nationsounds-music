import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Carte from "./Carte";
import Footer from "./Footer";
import Info from "./notification";
import InfoGeneral from "./notificationgeneral";

export default function CarteInt(){
    const [cookies, removeCookie] = useCookies(['login']);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className="contenu">
                <MenuConnected disconnect={e => disconnect()}/>
                <div className={"Notifaction-home"}>
                        <Info></Info>
                    </div>
                    <div className={"Notifaction-home2"}>
                        <InfoGeneral></InfoGeneral>
                    </div>
                <div className={"map-carteint"}>
                <Carte></Carte>
                </div>
                <Footer></Footer>
            </div>
        )
    } else {
        return(
            <div className="contenu">
                <Menu></Menu>

                <div className={"Notifaction-home"}>
                    <Info></Info>
                </div>

                <div className={"Notifaction-home2"}>
                    <InfoGeneral></InfoGeneral>
                </div>

                <div className={"map-carteint"}>
                    <Carte></Carte>
                </div>
                
                <Footer></Footer>
            </div>
    
        )
    }

    
}