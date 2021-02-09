import React from "react";
import {Link} from "react-router-dom";

export default function Menu()  {
    return (
        <nav className={"navBarre"}>
            <Link to={'/'}> Accueil </Link>
            <Link to={'/login'}> Se connecter </Link>
            <Link to={'/register'}> S'inscrire </Link>
            <Link to={'/carte'}> Carte interactive </Link>
            <Link to={'/infosFAQ'}> Informations pratiques / FAQ </Link>
            <Link to={'/billetterie'}> Billetterie </Link>
            <Link to={'/programme'}> Programme </Link>
            <Link to={'/contact'}> Contact </Link>
            <Link to={'/partenaires'}> Partenaires </Link>
            <Link to={'/photos'}> Photos </Link>
        </nav>

    );

}

