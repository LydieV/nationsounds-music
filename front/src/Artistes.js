import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";

const Artistes = () => {
    const [cookies, removeCookie] = useCookies(['login']);    
    let [artisteDatas, setArtisteDatas] = useState([]) // variable magique qui lorsuqe nous la modifions relance le rendering Artistes
    
    useEffect(() => {
        // je recherche ma data en base
        axios
            .get('https://localhost:8000/api/artistes')
            .then(datas => {
                setArtisteDatas(datas.data["hydra:member"])
            })
    }, [])

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu"}>
                <MenuConnected disconnect={e => disconnect()}></MenuConnected>
                <p> Liste des artistes </p>
                {artisteDatas.map(artisteData =>
                <div>
                   <p> Son nom :  {artisteData.name} </p> 
                   <p> Son style :  {artisteData.style} </p> 
                   <br/>
                </div>
                )}
            </div>
            

        )
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
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

    
}


export default Artistes;