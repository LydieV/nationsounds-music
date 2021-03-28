import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Tabs from "./Tabs";
import Faq from "./Faq";
import Info from "./Info";
import Notification from "./notification";

const InfosFAQ = () => {
    let [infosfaqDatas, setInfosFAQDatas] = useState([]);
    useEffect(() => {
        axios
            .get('https://localhost:8000/api/faqs')
            .then(datas => {
                setInfosFAQDatas(datas.data["hydra:member"])
            })
    }, []);


    return (
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>

            {/*JSON.stringify(infosfaqDatas)*/}
            <div className={"blockSwitchProgramme"}>



            <Tabs>
                <div title="Foire aux Questions" > 
                    <Faq></Faq>
                </div>

                <div title="Informations">
                    <Info></Info>
                </div>
            </Tabs>
            <p className={"faq"}> c'est pour le margin </p>
            <Notification></Notification>
            </div>
        </div>
    )
}


export default InfosFAQ;