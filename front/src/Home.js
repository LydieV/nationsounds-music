import React from "react";
import Artistes from "./Artistes";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";


function Home() {
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
                <p> Page d'accueil</p>
                <Footer></Footer>
            </div>
        )
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
                <p> Page accueil </p>
                <Footer></Footer>
                
            </div>
        )
    }
}

export default Home;