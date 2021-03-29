import React from "react";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import axios from "axios";

export default function Info()  {
    let [infoDatas, setInfoDatas] = useState([]);
    const [cookies, removeCookie] = useCookies(['login']);

    useEffect(() => {
        axios
            .get('https://localhost:8000/api/infos')
            .then(datas => {
                setInfoDatas(datas.data["hydra:member"])
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
                <div className={"dot-info"}>
                    <p>Informations importantes</p>
                    
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
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
                <div className={"dot-info"}>
                    <p>Informations importantes</p>
                    
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


}
