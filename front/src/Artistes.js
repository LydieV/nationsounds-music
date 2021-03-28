import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import MenuConnected from "./MenuConnected";

const Artistes = () => {
    const [cookies, removeCookie] = useCookies(['login']);  
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);

    let [userDatas, setUserDatas] = useState([]);
    let [artisteDatas, setArtisteDatas] = useState([]); // variable magique qui lorsuqe nous la modifions relance le rendering Artistes
    
    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function getArtistes(){
        await axios
        .get('https://localhost:8000/api/artistes')
        .then(datas => {
            setArtisteDatas(datas.data["hydra:member"])
            setUser(true)
        });
    }

    async function getUsers(){
        await axios
        .get('https://localhost:8000/api/users')
        .then(datas => {
            setUserDatas(datas.data["hydra:member"])
        })
    }

    function modifArtiste(e){
        e.preventDefault();
        let id = document.querySelector("input[name='id']").value;
        let name = document.querySelector("input[name='name']").value;
        let style = document.querySelector("input[name='style']").value;
        let artiste = {
            name: name,
            style: style
        }
        if(name === '' || style === '' ){
            console.log("remplissez les champs");
        } else {
            axios.put('https://localhost:8000/api/artistes/'+id, {artiste});
        }
    }

    useEffect(() => {
        getArtistes()
    }, []);

    useEffect(() => {
        getUsers()
    }, []);
        
    if(loading === true){
        
        if(user === true){
            for(let i=0; i < userDatas.length; i++){
                if(cookies.login.email === userDatas[i].email){
                    for(let j=0; j < userDatas[i].roles.length; j++){
                        if(userDatas[i].roles[j] === "ROLE_ADMIN"){
                            setAdmin(true);
                        }
                    }
                }
            }
            setLoading(false);
        } else {
            return (
                <div>
                    <p> Chargement en cours </p>
                </div>
            )
        }
    } else {
        if (cookies.login && cookies.login.email){
            if(admin === true){
                return(
                    <div className={"contenu"}>
                        <MenuConnected disconnect={e => disconnect()}></MenuConnected>
                        <p> Liste des artistes </p>
                        {artisteDatas.map(artisteData =>
                        <form action="#" onSubmit={e => modifArtiste(e)}>
                            <input type="text" name="id" value={artisteData.id} />
                            <label> {artisteData.name} </label>
                            <input type="text" name="name" />
                            <label> {artisteData.style} </label>
                            <input type="text" name="style"/>
    
                            <input type="submit" value="Modifier"/>
                        </form>
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
}

export default Artistes;