import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Profil(){
    return(
        <div>
            <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>

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
}