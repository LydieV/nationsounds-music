import React from "react";
import {Link} from "react-router-dom";
{/*import Formnews from './Form-newsletter';*/}

export default function Footer()  {
    return (
        <div class="footer">

            <div class="container-footer logo-footer">
                <a href="./"><img src="https://svgshare.com/i/VPB.svg" alt="logo"/></a>
            </div>

            <hr></hr>

            <div class="container-footer lien-footer">
                <ul class="liste-lien">
                    <li><Link to={'/programme'}> Programmes </Link></li>
                    <li><Link to={'/billetterie'}> Billetterie </Link></li>
                    <li><Link to={'/infosFAQ'}> Foire aux questions </Link></li>
                    <li><Link to={'/carte'}> Carte interactive </Link></li>
                    <li><Link to={'/contact'}> Contact </Link></li>
                    <li><Link to={'/partenaires'}> Partenaires </Link></li>
                    <li><Link to={'/mentionslegales'}> Mentions légales </Link></li>
                    <li><Link to={'/cookies'}> Cookies </Link></li>
                </ul>
            </div>

            <hr></hr>

            <div class="container-footer social">
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXS.svg" alt="lien instagram" height="1.7rem" width="1.7rem"/></a>
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWC.svg" alt="lien facebook" height="1.7rem" width="1.7rem"/></a>
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/Vbb.svg" alt="lien snapshat" height="1.7rem" width="1.7rem"/></a>
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWj.svg" alt="lien twitter" height="1.7rem" width="1.7rem"/></a>
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/VWu.svg" alt="lien youtube" height="1.7rem" width="1.7rem"/></a>
                <a href="./" class="socialimg"><img src="https://svgshare.com/i/VXc.svg" alt="lien linkedin" height="1.7rem" width="1.7rem"/></a>                
            </div>

            <hr></hr>

            <div class="container-footer newsletter">
                {/*<Formnews></Formnews>*/}
                <form className={"formsearch"} class="register-form">           
                    <label>
                        Inscrivez-vous à la newsletter
                    </label>
                    <input type="imput" id="imput" placeholder="Votre adresse mail ..."/>
                    {/*<input type="submit" value="Submit" />*/}
                    <input type="image" id="image" alt="S'abonner" src="https://svgshare.com/i/VWv.svg"/>
                </form>
            </div>

            <div class="container-footer copyright">
                <p>Nation Sounds 2021 © Tous droits réservés</p>
            </div>

        </div>
    );

}