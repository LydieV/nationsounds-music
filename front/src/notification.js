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





}
