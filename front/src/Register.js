import React from "react";
import Header from "./Header";

export default function Register(){
    return(
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>
            <div className={"register-option"}>
                <h1>S’inscrire avec :</h1>
                <button className={"Google-button"}>Google</button>
                <button className={"Facebook-button"}>Facebook</button>
            </div>
            <hr></hr>
            <form action="#" className={"register-form"}>
                <h2>Inscription</h2>
                <input type="text" name="nom" placeholder="Votre nom"></input>
                <input type="text" name="prenom" placeholder="Votre prénom"></input>
                <input type="email" name="email" placeholder="Votre adresse mail"></input>
                <input type="password" name="password" placeholder="Votre mot de passe"></input>
                <input type="password" name="password" placeholder="Confirmez votre mot de passe"></input>
                <p>En cliquant sur s’inscrire, vous acceptez notre politique de gestion des données.</p>
                <button>S'inscrire</button>
            </form>
        </div>

    );
}