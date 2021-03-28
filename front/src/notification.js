import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Info()  {
    let [infoDatas, setInfoDatas] = useState([]);
    let monInfo = [];
    useEffect(() => {
        axios
            .get('https://localhost:8000/api/infos')
            .then(datas => {
                setInfoDatas(datas.data["hydra:member"])
            })
    }, []);


    /*boucle for avec i < 2
    let taille = infoDatas.length;
    if(infoDatas.type === "general"){
        monInfo.push(infoDatas[taille])
    }
        deuxieme boucle for mais avec l'autre type d'info
        
    */
   
    for (let i=1; i < 2; i++) {
        let taille = infoDatas.length;
        let typenotif = infoDatas[1].type;

        if(typenotif === "general"){
            monInfo.push(infoDatas[taille])

            return (
                <div>   
                {infoDatas.map(infoData =>
                    <div>
    
    
                        <div className={"card-notif"}>
                            <p key={infoData.id=1}> {infoData.titre}</p>
                            <a href={"./infosFAQ"}> &gt; </a>
                        </div>
    
    
                    </div>
                )}
            </div>
                
            )



        } else {
            return (
                <div>
                    <p>marche po</p>
                    
                </div>
            )
        }
    }






}
