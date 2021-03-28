import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

const Partenaires = () => {
    const [cookies, removeCookie] = useCookies(['login']);
    let [partenaireDatas, setPartenaireDatas] = useState([]) // variable magique qui lorsuqe nous la modifions relance le rendering Partenaires
    
    useEffect(() => {
        // je recherche ma data en base
        axios
            .get('https://localhost:8000/api/partenaires')
            .then(datas => {
                setPartenaireDatas(datas.data["hydra:member"])
            })
    }, []);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu"}>
                <MenuConnected disconnect={e => disconnect()}/>
                <p> Liste des partenaires 2 </p>
                
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
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
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

    
}


export default Partenaires;