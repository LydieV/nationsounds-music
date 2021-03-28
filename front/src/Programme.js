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
    let [artistesDatas, setArtistesDatas] = useState([]);

    setArtistesDatas = [];

 /*   useEffect(() => {
        axios
        .get('https://localhost:8000/api/evenements')
        .then(datas => {
            setEvenementDatas(datas.data["hydra:member"])
            evenementDatas.map(evenementData =>
                getArtistes(evenementData.artistes)
                )
        })
    }, []);*/

    async function getEvenement(){
        await axios.get('https://localhost:8000/api/evenements')
        .then(datas => {
            setEvenementDatas(datas.data["hydra:member"])
            evenementDatas.map(evenementData =>
                getArtistes(evenementData.artistes)
                )})
    }

    async function getArtistes(madata){
        await axios
        .get('https://localhost:8000'+madata)
        .then(datas => {
            artistesDatas.push(datas.data)
            getProgramme()
        })
    }

    async function getProgramme(){
        for(let i =0; i < evenementDatas.length; i++){
            for(let j=0; j < artistesDatas.length; j++){
               let urlartiste = "/api/artistes/"+artistesDatas[j].id;
                if(evenementDatas[i].artistes === urlartiste){
                    evenementDatas[i].artistes.push({"id" : artistesDatas[j].id, 'name' : artistesDatas[j].name,'style' : artistesDatas[j].style});
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
    
                    {JSON.stringify(artistesDatas)}
                    {artistesDatas.map(artistesData =>
                        <div>
                            <p>{artistesData.name}</p>
                            <p>{artistesData.id}</p>
                        </div>
                        )}
                    <br/>
                    <br/>
                    {evenementDatas.map(evenementData =>
                        <div>
                            <p>{evenementData.type}</p>
                            <p>{evenementData.horaireDebut}</p>                        
                            <p>{evenementData.artistes}</p>
                            <p>{evenementData.artistes.name}</p>
                            
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
    
                    {JSON.stringify(artistesDatas)}
                    {artistesDatas.map(artistesData =>
                        <div>
                            <p>{artistesData.name}</p>
                            <p>{artistesData.id}</p>
                        </div>
                        )}
                    <br/>
                    <br/>
                    {evenementDatas.map(evenementData =>
                        <div>
                            <p>{evenementData.type}</p>
                            <p>{evenementData.horaireDebut}</p>                        
                            <p>{evenementData.artistes}</p>
                            <p>{evenementData.artistes.name}</p>
                            
                        </div>
                        )}
    
                        {JSON.stringify(evenementDatas)}
                </div>
            </div>
    
        );
    }


}

export default Programme;