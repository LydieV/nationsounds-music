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
