import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Faq()  {
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
            {infosfaqDatas.map(infosfaqData =>
                <div className={"card-faq"}>
                    <h3>{infosfaqData.question}</h3>
                    <p>{infosfaqData.reponse}</p> 
                </div>
            )}
        </div>

    )
}
