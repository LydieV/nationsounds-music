import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Tabs from "./Tabs";

const Programme = () => {
    const [cookies, removeCookie] = useCookies(['login']);
    const [arts, setArts] = useState(false);
    const [event, setEvent] = useState(false);


    let [evenementDatas, setEvenementDatas] = useState([]);
    let [artisteDatas, setArtisteDatas] = useState([]);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function getEvenement(){
        await axios.get('https://localhost:8000/api/evenements')
        .then(datas => {
            setEvenementDatas(datas.data["hydra:member"]);
            setEvent(true)
            })
    }

    async function getArtiste(){
        await axios
        .get('https://localhost:8000/api/artistes')
        .then(datas => {
            setArtisteDatas(datas.data["hydra:member"]);
            setArts(true)
        })
    }

    useEffect(() => {
        getEvenement();
    }, []);

    useEffect(() => {
        getArtiste();
    }, []);
    
    
    if(event === false && arts === false){
                    return (
                <div>
                   <p> chargement en cours </p>
               </div>
    
           )
    }else {
            if (cookies.login && cookies.login.email){
                return(
                    <div className={"contenu"}>
                        <MenuConnected disconnect={e => disconnect()}/>
                        <div className={"blockSwitchProgramme"}>
                            
                            <Tabs>
                                <div title="Concerts">
                                    <div class="cardsProgramme">

                                    {evenementDatas.map(evenementData =>
                                        <div className={"cardProgramme"}>
                                            <div className={"imgCard"}>
                                                <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                            </div>
                                            <div className={"contenuCard"}>
                                                <p className={"horaireCard"}>{evenementData.horaireDebut}</p>
                                                {artisteDatas.map(artisteData =>
                                                    <div>
                                                        {
                                                            evenementData.artiste[0] === "/api/artistes/"+artisteData.id ?
                                                                <p className={"nomCard"}> {artisteData.name}</p>
                                                            : ''
                                                        }
                                                    </div>
                                                    )}
                                                
                                            </div>
                                        </div>
                                    )}
                                               
                                    </div>
                                    
            
                                </div>
                                <div title="Dédicaces">
                                    <div>
                                        <p> dédicace</p>
                                    </div>
                                </div>
                            </Tabs>
            
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className={"contenu"}>
                        <Menu></Menu>
                        <div className={"blockSwitchProgramme"}>
                            
                            <Tabs>
                            <div title="Concerts">
                                    <div class="cardsProgramme">

                                    {evenementDatas.map(evenementData =>
                                        <div className={"cardProgramme"}>
                                            <div className={"imgCard"}>
                                                <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                            </div>
                                            <div className={"contenuCard"}>
                                                <p className={"horaireCard"}>{evenementData.horaireDebut}</p>
                                                {artisteDatas.map(artisteData =>
                                                    <div>
                                                        {
                                                            evenementData.artiste[0] === "/api/artistes/"+artisteData.id ?
                                                                <p className={"nomCard"}> {artisteData.name}</p>
                                                            : ''
                                                        }
                                                    </div>
                                                    )}
                                                
                                            </div>
                                        </div>
                                    )}
                                               
                                    </div>
                                    
            
                                </div>
                                <div title="Dédicaces">
                                    <div>
                                        <p> dédicace</p>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
            
                );
            }
        }

}

export default Programme;