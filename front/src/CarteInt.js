import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Carte from "./Carte";
import Footer from "./Footer";

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
                <div class="map-carteint">
                <Carte></Carte>
                </div>
                <Footer></Footer>
            </div>
        )
    } else {
        return(
            <div className="contenu">
                <Menu></Menu>
                <div class="map-carteint">
                <Carte></Carte>
                 </div>
                <Footer></Footer>
            </div>
    
        )
    }

    
}