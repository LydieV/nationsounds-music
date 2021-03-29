import React from "react";
import {Link} from "react-router-dom";

export default function Menu()  {
    return (
        <div className={"navbar"}>
          <div className={"header-menu"}>
            <a href="./" className={"logo"}><img src="https://svgshare.com/i/VPB.svg" alt="logo"/></a>
            <a href="./Login" className={"login"}><img src="https://svgshare.com/i/VNn.svg" alt="login"/></a>
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
                        <Link to={'/login'}> Se connecter </Link>
                    </li>
                    <li>
                        <Link to={'/register'}> S'inscrire </Link>
                    </li>
                    <li>
                        <Link to={'/carte'}> Carte interactive </Link>
                    </li>
                    <li> 
                        <Link to={'/infosFAQ'}> Informations pratiques / FAQ </Link>
                    </li>
                    <li>
                        <Link to={'/billetterie'}> Billetterie </Link>
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
                    <ul>
                    <a href="https://instagram.com " target="_blank" class={"instagram-menu"}><img src="https://svgshare.com/i/VXS.svg"  alt="lien instagram" /></a>
                    <a href="https://facebook.com" target="_blank" class={"facebook-menu"}><img src="https://svgshare.com/i/VWC.svg" alt="lien facebook" /></a>
                    <a href="https://twitter.com" target="_blank" class={"twitter-menu"}><img src="https://svgshare.com/i/VWj.svg" alt="lien twitter" /></a>
                    </ul>
                </div>
                    
          </div>
          
      </div>
        

    );

}




