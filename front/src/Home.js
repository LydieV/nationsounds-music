import React from "react";
import Artistes from "./Artistes";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Carte from "./Carte";


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
            <div className={"homepage"}>
                <MenuConnected disconnect={e => disconnect()}/>
                <h1>Découvrez le plan</h1>
                <div className={"map-home"}>

                <Carte></Carte>
                </div>

                <Footer></Footer>
            </div>
        )
    } else {
        return (
            <div className={"homepage"}>
            <Menu></Menu>
                <h1 className={"h-programmes"}>Programmes concerts</h1>
                <h2 className={"h-textbillet"}>Toujours pas de billets ?</h2>
                <a href='./billetterie'>
                 <button class={"btn-billet"}>Accéder à la <br></br>billeterie</button>
                </a>
                <h1 className={"h-plan"}>Découvrez le plan</h1>
                <div className={"map-home"}>
                <Carte></Carte>
                </div>
                <Footer></Footer>
                
            </div>
        )
    }
}

export default Home;