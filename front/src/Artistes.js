import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";

const Artistes = () => {
    const [cookies, removeCookie] = useCookies(['login']);  
    let [userDatas, setUserDatas] = useState([]);
    let [artisteDatas, setArtisteDatas] = useState([]) // variable magique qui lorsuqe nous la modifions relance le rendering Artistes
    let [adminState, setAdminStates] = useState(false);

    useEffect(() => {
        // je recherche ma data en base
        axios
            .get('https://localhost:8000/api/artistes')
            .then(datas => {
                setArtisteDatas(datas.data["hydra:member"])
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://localhost:8000/api/users')
            .then(datas => {
                setUserDatas(datas.data["hydra:member"])
            })
    }, [])

    if(cookies.login){
        getVerif(cookies.login);
    }

    function getVerif(uid){
        for(let i=0; i < userDatas.length; i++){
          //  console.log(userDatas[i].roles);
            if(uid.email === userDatas[i].email){
                for(let j=0; j < userDatas[i].roles.length; j++){
                    if(userDatas[i].roles[j] === "ROLE_ADMIN"){
                        setAdminStates = true;
                    }
                }
            }
        }
    }

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        if(adminState){
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
                <Redirect to={'/'} />
            )
        }
        
    } else {
        return (
            <Redirect to={'/'} />
        )

    }

    
}


export default Artistes;