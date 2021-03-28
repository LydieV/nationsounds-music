import React from "react";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Tabs from "./Tabs";

export default function Profil(){
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
                
                <div>
                <MenuConnected disconnect={e => disconnect()}/>
    
                {/*JSON.stringify(infosfaqDatas)*/}
                <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Profil" > 
                        <div className={"profil-info"}>
                            <button>Modifier les informations</button>
                            <input type="text" name="nom" placeholder="Votre nom"></input>
                            <input type="text" name="prenom" placeholder="Votre prénom"></input>
                            <input type="email" name="email" placeholder="Votre adresse mail"></input>
                            <input type="password" name="password" placeholder="•••••••••••"></input>
                        </div>
                    </div>
    
                    <div title="Billet">
                        <div className={"billet-info"}>
                            <button>Voir mon billet</button>
                        </div>
                    </div>
                </Tabs>
                
                </div>
            </div>
            </div>
    
        );
    } else {
        return(
            <Redirect to={'/'} />
    
        )
    }

    
}