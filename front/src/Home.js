import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Carte from "./Carte";
import CookieConsent from "react-cookie-consent";
import Info from "./notification";
import InfoGeneral from "./notificationgeneral";


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
                    <div className={"Notifaction-home"}>
                        <Info></Info>
                    </div>
                    <div className={"Notifaction-home2"}>
                        <InfoGeneral></InfoGeneral>
                    </div>

                <div className={"programme-concert"}>
                    <a href='./programme'>
                        <button className={"btn-programme1"}><p>THE</p><p><br></br> WEEKND</p></button>
                    </a>
                    <a href='./programme'>
                        <button className={"btn-programme2"}><p>AYA</p><p><br></br>NAKAMURA</p></button>
                    </a>
                    <a href='./programme'>
                        <button className={"btn-programme3"}><p>DAVID</p><p><br></br>GUETTA</p></button>
                    </a>
                </div>

                <h1 className={"h1m"}>Programmes concerts</h1>
                <h2 className={"h-textbillet"}>Toujours pas de billets ?</h2>
                
                <a href='https://www.leclercbilletterie.com/fr/resultat?ipSearch=the+weeknd'>
                 <button className={"btn-billet"}>Accéder à la <br></br>billeterie</button>
                </a>
                
                <h1 className={"h1m h-plan"}>Découvrez le plan</h1>
                
                <div className={"map-home"}>
                    <Carte></Carte>
                </div>

                <CookieConsent
                    onAccept={() => {
                        alert("C'est ok tu as accepté les cookies");
                    }}
                    enableDeclineButton
                    onDecline={() => {
                        alert("Noooon les cookiiies !");
                    }}
                    location="bottom"
                    buttonText="Accepter"
                    declineButtonText="Décliner"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "white", 
                    color :"#34383F",
                    borderRadius: "8px",
                    margin : "30px",
                    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
                    width : "none"
                    }}
                    buttonStyle={{ color: "white", 
                    fontSize: "14px",
                    boxShadow: "inset -3.63243px -5.38531px 6.49585px #6F00BD, inset 3.63243px 5.38531px 6.49585px #B500FF",
                    filter: "drop-shadow(10.0282px 14.8674px 35.8667px rgba(30, 0, 51, 0.3205))",
                    background: "linear-gradient(146deg, #AD00FF 0%, #7700CA 72.03%)",
                    borderRadius: "8px",
                      }}
                    declineButtonStyle={{
                        color: "#9600FF", 
                        fontSize: "14px",
                        border: "2px solid #9600FF",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        background: "white"
                    }}
                    expires={150}
                    >
                    Ce site utilise des cookies pour personnaliser votre navigation.<br></br>
                    Acceptez-vous l'utilisation des cookies ?
                </CookieConsent>
                <Footer></Footer>
            </div>
        )
    } else {
        return (
            
            <div className={"homepage"}>
            <Menu></Menu>
                <div className={"Notifaction-home"}>
                    <Info></Info>
                </div>
                <div className={"Notifaction-home2"}>
                    <InfoGeneral></InfoGeneral>
                </div>

                
                <div className={"programme-concert"}>
                
                <a href='./programme'>
                 <button className={"btn-programme1"}><p>THE</p><p><br></br> WEEKND</p></button>
                </a>
                <a href='./programme'>
                 <button className={"btn-programme2"}><p>AYA</p><p><br></br>NAKAMURA</p></button>
                </a>
                <a href='./programme'>
                 <button className={"btn-programme3"}><p>DAVID</p><p><br></br>GUETTA</p></button>
                </a>
                </div>
                <h1 className={"h1m"}>Programmes concerts</h1>
                
                <h2 className={"h-textbillet"}>Toujours pas de billets ?</h2>
                
                <a target="_blank" href='https://www.leclercbilletterie.com/fr/resultat?ipSearch=the+weeknd'>
                 <button className={"btn-billet"}>Accéder à la <br></br>billeterie</button>
                </a>
                <h1 className={"h1m h-plan"}>Découvrez le plan</h1>

                <div className={"map-home"}>
                <Carte></Carte>
                </div>
                <CookieConsent
                    onAccept={() => {
                        alert("C'est ok tu as accepté les cookies");
                    }}
                    enableDeclineButton
                    onDecline={() => {
                        alert("Noooon les cookiiies !");
                    }}
                    location="bottom"
                    buttonText="Accepter"
                    declineButtonText="Décliner"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "white", 
                    color :"#34383F",
                    borderRadius: "8px",
                    margin : "30px",
                    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
                    width : "none"
                    }}
                    buttonStyle={{ color: "white", 
                    fontSize: "14px",
                    boxShadow: "inset -3.63243px -5.38531px 6.49585px #6F00BD, inset 3.63243px 5.38531px 6.49585px #B500FF",
                    filter: "drop-shadow(10.0282px 14.8674px 35.8667px rgba(30, 0, 51, 0.3205))",
                    background: "linear-gradient(146deg, #AD00FF 0%, #7700CA 72.03%)",
                    borderRadius: "8px",
                      }}
                    declineButtonStyle={{
                        color: "#9600FF", 
                        fontSize: "14px",
                        border: "2px solid #9600FF",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        background: "white"
                    }}
                    expires={150}
                    >
                    Ce site utilise des cookies pour personnaliser votre navigation.<br></br>
                    Acceptez-vous l'utilisation des cookies ?
                </CookieConsent>
                <Footer></Footer>
                
            </div>
        )
    }
}

export default Home;