import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

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
            <div className={"contenu"}>
                <MenuConnected disconnect={e => disconnect()}/>
                <p> carte interactive</p>
            </div>
        )
    } else {
        return(
            <div className={"contenu"}>
                <Menu></Menu>
                <p> carte interactive</p>
            </div>
    
        )
    }

    
}