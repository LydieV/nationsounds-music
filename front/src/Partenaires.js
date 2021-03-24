import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const Partenaires = () => {
    let [partenaireDatas, setPartenaireDatas] = useState([]) // variable magique qui lorsuqe nous la modifions relance le rendering Partenaires
    useEffect(() => {
        // je recherche ma data en base
        axios
            .get('https://localhost:8000/api/partenaires')
            .then(datas => {
                setPartenaireDatas(datas.data["hydra:member"])
            })
    }, [])


    return (
        <div>
            <Header></Header>
            <p> Liste des partenaires 2 </p>
   
            {/*JSON.stringify(partenaireDatas)*/}
            
            {partenaireDatas.map(partenaireData =>
            <div>
               <p> Son nom :  {partenaireData.id} </p> 
               <p> Son style :  {partenaireData.nom} </p> 
               <br/>
                <h1>Nos Partenaires</h1>
                <div className={"card-list"}>


                    <div className={"card-partenaire"}>
                        <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                        <p className={"text-partenaire"}>{partenaireData.nom}</p>
                    </div>

                    <div className={"card-partenaire"}>
                        <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                        <p className={"text-partenaire"}>{partenaireData.nom}</p>
                    </div>
                    
                    <div className={"card-partenaire"}>
                        <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                        <p className={"text-partenaire"}>{partenaireData.nom}</p>
                    </div>

                    <div className={"card-partenaire"}>
                        <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                        <p className={"text-partenaire"}>{partenaireData.nom}</p>
                    </div>

                    <div className={"card-partenaire"}>
                        <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                        <p className={"text-partenaire"}>{partenaireData.nom}</p>
                    </div>

                </div>
            </div>
            
            )}

        </div>
    )
}


export default Partenaires;