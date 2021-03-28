import React from "react";
import {useCookies} from 'react-cookie';
import Menu from "./Menu";
import {Redirect} from 'react-router-dom';
import MenuConnected from "./MenuConnected";

export default function Billetterie(){
    const [cookies, removeCookie] = useCookies(['login']);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }
    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu"}>
                <p> je suis connecté</p>
                <MenuConnected disconnect={e => disconnect()}/>
            </div>
        )
    } else {
        return(
            <div className={"contenu"}>
                <Menu></Menu>
                <p> Page Billetterie </p>
            </div>
    
        );

    }
    
}