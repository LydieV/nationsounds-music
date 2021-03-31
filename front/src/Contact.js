import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Info from "./notification";
import InfoGeneral from "./notificationgeneral";

export default function Contact(){
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
                <div className={"Notifaction-home"}>
                        <Info></Info>
                    </div>
                    <div className={"Notifaction-home2"}>
                        <InfoGeneral></InfoGeneral>
                    </div>
                <h1 className={"l-b-m"}>Contactez-nous !</h1>
                <div className={"contact-form"}>
                    <input type="email" name="email" placeholder="Votre adresse mail"></input>
                    <input type="text" name="sujet" placeholder="Sujet de votre message"></input>
                    <textarea type="textarea" className={"textareaContact"} name="message" placeholder="Votre message"></textarea>
                    <button>Envoyer</button>
                </div>
                <hr></hr>
                <div className={"contact-rs"}>
                    <p>Vous avez un problème ?</p>
                    <p>Contactez-nous sur les réseaux sociaux :</p>
                    <div class="contact-rs social">
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXS.svg" alt="lien instagram" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWC.svg" alt="lien facebook" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWj.svg" alt="lien twitter" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWu.svg" alt="lien youtube" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXc.svg" alt="lien linkedin" height="1.7rem" width="1.7rem"/></a>                
                    </div>
                </div>
                <hr></hr>
                <div className={"contact-mail"}>
                    <p>Vous souhaitez nous contacter par mail ?</p>
                    <a href="#">contact@nation-sounds.fr</a>
                </div>
                <Footer></Footer>
            </div>
        )
    } else {
        return(
            <div className={"contenu"}>
                <Menu></Menu>
                <div className={"Notifaction-home"}>
                        <Info></Info>
                    </div>
                    <div className={"Notifaction-home2"}>
                        <InfoGeneral></InfoGeneral>
                    </div>
                <div className={"contact-form"}>
                    <h1>Contactez-nous ! </h1>
                    <input type="email" name="email" placeholder="Votre adresse mail"></input>
                    <input type="text" name="sujet" placeholder="Sujet de votre message"></input>
                    <textarea type="textarea" name="message" className={"textareaContact"} placeholder="Votre message"></textarea>
                    <button>Envoyer</button>
                </div>
                <hr></hr>
                <div className={"contact-rs"}>
                    <p>Vous avez un problème ?</p>
                    <p>Contactez-nous sur les réseaux sociaux :</p>
                    <div class="contact-rs social">
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXS.svg" alt="lien instagram" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWC.svg" alt="lien facebook" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWj.svg" alt="lien twitter" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWu.svg" alt="lien youtube" height="1.7rem" width="1.7rem"/></a>
                        <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXc.svg" alt="lien linkedin" height="1.7rem" width="1.7rem"/></a>                
                    </div>
                </div>
                <hr></hr>
                <div className={"contact-mail"}>
                    <p>Vous souhaitez nous contacter par mail ?</p>
                    <a href="#">contact@nation-sound.fr</a>
                </div>
                <Footer></Footer>
            </div>
    
        );
    }
    
}