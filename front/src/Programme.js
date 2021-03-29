import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Tabs from "./Tabs";

const Programme = () => {
    const [cookies, removeCookie] = useCookies(['login']);
    let [evenementDatas, setEvenementDatas] = useState([]);
    let [artisteDatas, setArtisteDatas] = useState([]);

    setArtisteDatas = [];

 /*   useEffect(() => {
        axios
        .get('https://localhost:8000/api/evenements')
        .then(datas => {
            setEvenementDatas(datas.data["hydra:member"])
            evenementDatas.map(evenementData =>
                getArtiste(evenementData.artiste)
                )
        })
    }, []);*/

    async function getEvenement(){
        await axios.get('https://localhost:8000/api/evenements')
        .then(datas => {
            setEvenementDatas(datas.data["hydra:member"])
            evenementDatas.map(evenementData =>
                getArtiste(evenementData.artiste)
                )})
    }

    async function getArtiste(madata){
        await axios
        .get('https://localhost:8000'+madata)
        .then(datas => {
            artisteDatas.push(datas.data)
            getProgramme()
        })
    }

    async function getProgramme(){
        for(let i =0; i < evenementDatas.length; i++){
            for(let j=0; j < artisteDatas.length; j++){
               let urlartiste = "/api/artistes/"+artisteDatas[j].id;
                if(evenementDatas[i].artiste === urlartiste){
                    evenementDatas[i].artiste.push({"id" : artisteDatas[j].id, 'name' : artisteDatas[j].name,'style' : artisteDatas[j].style});
                  console.log(evenementDatas);
                }
            }
        }
    }

    useEffect(() => {
        getEvenement();
    }, []);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu"}>
                <MenuConnected disconnect={e => disconnect()}/>
                <div className={"blockSwitchProgramme"}>
                    
                    <Tabs>
                        <div title="Concerts">
                            <div class="cardsProgramme">
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            </div>
                            
    
                        </div>
                        <div title="Dédicaces">
                            <div>
                                <p> dédicace</p>
                            </div>
                        </div>
                    </Tabs>
    
                    {JSON.stringify(artisteDatas)}
                    {artisteDatas.map(artisteData =>
                        <div>
                            <p>{artisteData.name}</p>
                            <p>{artisteData.id}</p>
                        </div>
                        )}
                    <br/>
                    <br/>
                    {evenementDatas.map(evenementData =>
                        <div>
                            <p>{evenementData.type}</p>
                            <p>{evenementData.horaireDebut}</p>                        
                            <p>{evenementData.artiste}</p>
                            <p>{evenementData.artiste.name}</p>
                            
                        </div>
                        )}
    
                        {JSON.stringify(evenementDatas)}
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
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            <div className={"cardProgramme"}>
                                <div className={"imgCard"}>
                                    <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                                </div>
                                <div className={"contenuCard"}>
                                    <p className={"horaireCard"}> 10:30</p>
                                    <p className={"nomCard"}> The Weeknd</p>
                                </div>
                            </div>
    
                            </div>
                            
    
                        </div>
                        <div title="Dédicaces">
                            <div>
                                <p> dédicace</p>
                            </div>
                        </div>
                    </Tabs>
    
                    {JSON.stringify(artisteDatas)}
                    {artisteDatas.map(artisteData =>
                        <div>
                            <p>{artisteData.name}</p>
                            <p>{artisteData.id}</p>
                        </div>
                        )}
                    <br/>
                    <br/>
                    {evenementDatas.map(evenementData =>
                        <div>
                            <p>{evenementData.type}</p>
                            <p>{evenementData.horaireDebut}</p>                        
                            <p>{evenementData.artiste}</p>
                            <p>{evenementData.artiste.name}</p>
                            
                        </div>
                        )}
    
                        {JSON.stringify(evenementDatas)}
                </div>
            </div>
    
        );
    }


}

export default Programme;