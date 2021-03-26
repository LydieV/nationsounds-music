import React from "react";
import Header from "./Header";

export default function Contact(){
    return(
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>
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