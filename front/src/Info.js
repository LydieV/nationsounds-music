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
            <div className={"dot-info"}>
                <p>Informations importantes</p>
                <p>Informations générales</p>
            </div>
            
            {infoDatas.map(infoData =>
                <div>



                    <div className={"card-info"}>
                        <h3>{infoData.titre}</h3>
                        <p>{infoData.description}</p> 
                    </div>

                </div>
            )}
        </div>

    )
}
