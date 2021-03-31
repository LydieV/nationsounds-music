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
    let [artisteDatas, setArtisteDatas] = useState([]); // variable magique qui lorsuqe nous la modifions relance le rendering Artiste
    
    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function getArtiste(){
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

    function modifArtiste(e, element){
        e.preventDefault();
        let id = document.querySelector("input[name='id"+element+"']").value;
        let name = document.querySelector("input[name='name"+element+"']").value;
        let style = document.querySelector("input[name='style"+element+"']").value;
        let artiste = {
            id: id,
            name: name,
            style: style
        }
        if(name === '' || style === '' ){
            alert("Remplissez tous les champs de l'artiste");
        } else {
            axios.put('https://localhost:8000/artiste/'+id+'/edit', {
                data: {artiste},
                headers: { Authorization: `Bearer ${artiste.token}` } 
            }).then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
        }
    }

    function ajoutArtiste(e){
        e.preventDefault();
        let name = document.querySelector("input[name='newName']").value;
        let style = document.querySelector("input[name='newStyle']").value;
        let newArtiste = {
            name: name,
            style: style
        }

        axios.post('https://localhost:8000/artiste/new', {newArtiste}).catch(error => console.log(error)).then(document.querySelector("form[name='createArtiste']").reset());
    }

    useEffect(() => {
        getArtiste()
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
           // if(admin === true){
                return(
                    <div className={"contenu"}>
                        <MenuConnected disconnect={e => disconnect()}></MenuConnected>
                        <form action="#" name="createArtiste" onSubmit={e => ajoutArtiste(e)}>
                            <input type="text" name="newName" placeholder="Nom"/>
                            <input type="text" name="newStyle" placeholder="Style"/>

                            <input type="submit" value="Ajouter"/>
                        </form>
                        <p> Liste des artistes </p>
                        {artisteDatas.map(artisteData =>
                        <form action="#" onSubmit={e => modifArtiste(e, artisteData.id)}>
                            <input type="text" name={"id"+artisteData.id} value={artisteData.id} />
                            <label> {artisteData.name} </label>
                            <input type="text" name={"name"+artisteData.id} />
                            <label> {artisteData.style} </label>
                            <input type="text" name={"style"+artisteData.id}/>
    
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
    }    
}

export default Artistes;