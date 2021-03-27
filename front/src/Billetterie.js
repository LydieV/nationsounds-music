import React from "react";
import {useCookies} from 'react-cookie';
import Header from "./Header";
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
            <div>
                <p> je suis connecté</p>
                <MenuConnected disconnect={e => disconnect()}/>
            </div>
        )
    } else {
        return(
            <div>
                <Header></Header>
                <p> Page Mentions Billetterie </p>
            </div>
    
        );

    }
    
}