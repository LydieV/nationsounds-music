import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Info()  {
    let [infoDatas, setInfoDatas] = useState([]);

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
                {infoDatas.slice(0).reverse().map(infoData =>
                    <div>
                        {
                            infoData.type === "urgente" ?
                            
                                <div className={"card-notif"}>
                                    <p> {infoData.titre}</p>
                                    <a href={"./infosFAQ"}> <img src="https://svgshare.com/i/Vcr.svg"/> </a>
                                </div>
                            :''
                        }
                    </div>
                )}
            </div>
        </div>    
    )
}
