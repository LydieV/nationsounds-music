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



            return (
                <div> 
                    <div className={"conteneur-notif"}>
                {infoDatas.map(infoData =>
                    <div>
    
    
                        <div className={"card-notif"}>
                            <p> {infoData.titre}</p>
                            <a href={"./infosFAQ"}> <img src="https://svgshare.com/i/Vcr.svg"/> </a>
                        </div>
    
    
                    </div>
                )}
                </div>
            </div>
                
            )




}
