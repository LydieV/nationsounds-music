import React from "react";
import Header from "./Header";

export default function Login(){
    return(
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>
            <div className={"login-form"}>
            <h1>Connexion</h1>
                <input type="email" name="email" placeholder="Votre adresse mail"></input>
                <input type="password" name="password" placeholder="Votre mot de passe"></input>
                <button>Se connecter</button>
            </div>
            <hr></hr>
            <div className={"login-option"}>
                <p>Pas encore inscrit ?</p>
                <a href="/register">Créer un compte</a>
            </div>
        </div>

    );
}