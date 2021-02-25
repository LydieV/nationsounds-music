import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Artistes = () => {
    let [artisteDatas, setArtisteDatas] = useState([]) // variable magique qui lorsuqe nous la modifions relance le rendering Artistes
    useEffect(() => {
        // je recherche ma data en base
        axios
            .get('https://localhost:8000/api/artistes')
            .then(datas => {
                setArtisteDatas(datas.data["hydra:member"])
            })
    }, [])

    return (
        <div>
            <p> Liste des artistes </p>
   
            {/*JSON.stringify(artisteDatas)*/}
            
            {artisteDatas.map(artisteData =>
            <div>
               <p> Son nom :  {artisteData.name} </p> 
               <p> Son style :  {artisteData.style} </p> 
               <br/>
            </div>
            )}

        </div>
    )
}


export default Artistes;