import React from "react";
import {Link} from "react-router-dom";

export default function MenuConnected(props){
    return(
        <div className="navbar">
          <div className={"header-menu"}>
            <a href="./" className={"logo"}>
                <img src="https://svgshare.com/i/VPB.svg" alt="logo"/>
            </a>
            <a href="./Register"  id="disconnect" onClick={props.disconnect}>
                <div className={"deconnexion"}></div>
            </a>
          </div>

          <div id="nav-container">
            <div className={"bg"}></div>

            <div className={"button"} tabIndex="0">
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
            </div>

            <div id="nav-content" tabindex="0">
                <ul className={"menu"}>
                    <li>
                        <Link to={'/'}> Accueil </Link>
                    </li>
                    <li>
                        <Link to={'/profil'}> Profil </Link>
                    </li>
                    <li>
                        <Link to={'/carte'}> Carte interactive </Link>
                    </li>
                    <li> 
                        <Link to={'/infosFAQ'}> Informations pratiques / FAQ </Link>
                    </li>
                    <li>
                    <a target="_blank" href="https://www.leclercbilletterie.com/fr/resultat?ipSearch=the+weeknd">Billetterie</a>
                    </li>
                    <li>
                        <Link to={'/programme'}> Programme </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> Contact </Link>
                    </li>
                    <li> 
                        <Link to={'/partenaires'}> Partenaires </Link>
                    </li>
                    <li>
                        <Link to={'/photos'}> Photos </Link>
                    </li>
                </ul>
            </div>

          </div>
      </div>
        

    );
}