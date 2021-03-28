import React from "react";
import {Link} from "react-router-dom";

export default function Menu()  {
    return (
        <ul className={"menu"}>
          <li><Link to={'/'}> Accueil </Link></li>
          <li><Link to={'/login'}> Se connecter </Link></li>
          <li><Link to={'/register'}> S'inscrire </Link></li>
          <li><Link to={'/carte'}> Carte interactive </Link></li>
          <li> <Link to={'/infosFAQ'}> Informations pratiques / FAQ </Link></li>
          <li><Link to={'/billetterie'}> Billetterie </Link></li>
          <li><Link to={'/programme'}> Programme </Link></li>
          <li><Link to={'/contact'}> Contact </Link></li>
          <li> <Link to={'/partenaires'}> Partenaires </Link></li>
          <li><Link to={'/photos'}> Photos </Link></li>
       </ul>

    );

}




