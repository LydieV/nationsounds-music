import React from "react";
import {Link} from "react-router-dom";

export default function Menu()  {
    return (
        <nav>
            <Link to={'/'}> Accueil </Link>
            <br/>
            <Link to={'/login'}> Se connecter </Link><br/>
            <Link to={'/register'}> S'inscrire </Link><br/>
            <Link to={'/carte'}> Carte interactive </Link><br/>
            <Link to={'/infosFAQ'}> Informations pratiques / FAQ </Link><br/>
            <Link to={'/billetterie'}> Billetterie </Link><br/>
            <Link to={'/programme'}> Programme </Link><br/>
            <Link to={'/contact'}> Contact </Link><br/>
            <Link to={'/partenaires'}> Partenaires </Link><br/>
            <Link to={'/photos'}> Photos </Link>
        </nav>

    );

}

