import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Tabs from "./Tabs";

const InfosFAQ = () => {
    let [infosfaqDatas, setInfosFAQDatas] = useState([])
    useEffect(() => {
        axios
            .get('https://localhost:8000/api/faqs')
            .then(datas => {
                setInfosFAQDatas(datas.data["hydra:member"])
            })
    }, [])


    return (
        <div>
            <Header></Header>
            <p className={"faq"}> Liste faq 2 </p>
   
            {/*JSON.stringify(infosfaqDatas)*/}
            <div className={"blockSwitchProgramme"}>
            

            <Tabs>
                <div title="Foire aux Questions" > 
                {infosfaqDatas.map(infosfaqData =>
                    <div className={"card-faq"}>
                        <h3>{infosfaqData.question}</h3>
                        <p>{infosfaqData.reponse}</p> 
                    </div>
                )}
                </div>

                <div title="Informations">
                    <p>Informations générales</p>
                    <p>Affichage des notifications</p>
                </div>
            </Tabs>
            
            </div>
        </div>
    )
}


export default InfosFAQ;