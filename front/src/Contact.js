import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

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
                <div className={"contact-form"}>
                    <h1>Contactez-nous ! </h1>
                    <input type="email" name="email" placeholder="Votre adresse mail"></input>
                    <input type="text" name="sujet" placeholder="Sujet de votre message"></input>
                    <textarea type="textarea" name="message" placeholder="Votre message"></textarea>
                    <button>Envoyer</button>
                </div>
                <hr></hr>
                <div className={"contact-rs"}>
                    <p>Vous avez un problème ?</p>
                    <p>Contactez-nous sur les réseaux sociaux :</p>
                </div>
                <hr></hr>
                <div className={"contact-mail"}>
                    <p>Vous souhaitez nous contacter par mail ?</p>
                    <a href="#">contact@nation-sound.fr</a>
                </div>
            </div>
        )
    } else {
        return(
            <div className={"contenu"}>
                <Menu></Menu>
                <div className={"contact-form"}>
                    <h1>Contactez-nous ! </h1>
                    <input type="email" name="email" placeholder="Votre adresse mail"></input>
                    <input type="text" name="sujet" placeholder="Sujet de votre message"></input>
                    <textarea type="textarea" name="message" placeholder="Votre message"></textarea>
                    <button>Envoyer</button>
                </div>
                <hr></hr>
                <div className={"contact-rs"}>
                    <p>Vous avez un problème ?</p>
                    <p>Contactez-nous sur les réseaux sociaux :</p>
                </div>
                <hr></hr>
                <div className={"contact-mail"}>
                    <p>Vous souhaitez nous contacter par mail ?</p>
                    <a href="#">contact@nation-sound.fr</a>
                </div>
            </div>
    
        );
    }
    
}