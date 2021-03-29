import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import MenuConnected from "./MenuConnected";

const AdminInfo = () => {
    const [cookies, removeCookie] = useCookies(['login']);  
  //  const [loading, setLoading] = useState(true);
 //   const [admin, setAdmin] = useState(false);
 //   const [user, setUser] = useState(false);

  //  let [userDatas, setUserDatas] = useState([]);
    let [infoDatas, setInfoDatas] = useState([]); // variable magique qui lorsuqe nous la modifions relance le rendering Artiste
    
    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function getInfo(){
        await axios
        .get('https://localhost:8000/api/infos')
        .then(datas => {
            setInfoDatas(datas.data["hydra:member"])
           // setUser(true)
        });
    }

  /*  async function getUsers(){
        await axios
        .get('https://localhost:8000/api/users')
        .then(datas => {
            setUserDatas(datas.data["hydra:member"])
        })
    }*/

    function modifInfo(e, element){
        e.preventDefault();
        let id = document.querySelector("input[name='id"+element+"']").value;
        let titre = document.querySelector("input[name='titre"+element+"']").value;
        let type = document.querySelector("input[name='type"+element+"']").value;
        let description = document.querySelector("input[name='description"+element+"']").value;
        let info = {
            id: id,
            titre: titre,
            type: type,
            description: description
        }
        if(titre === '' || type === '' || description === ''){
            alert("Remplissez tous les champs de l'artiste");
        } else {
            axios.put('https://localhost:8000/info/'+id+'/edit', {info});
        }
    }

    useEffect(() => {
        getInfo()
    }, []);

    return(
        <div className={"contenu"}>
                        <MenuConnected disconnect={e => disconnect()}></MenuConnected>
                        <p> Liste des infos</p>
                        {infoDatas.map(infoData =>
                        <form action="#" onSubmit={e => modifInfo(e, infoData.id)}>
                            <input type="text" name={"id"+infoData.id} value={infoData.id} />
                            <label> {infoData.titre} </label>
                            <input type="text" name={"name"+infoData.id} />
                            <label> {infoData.type} </label>
                            <input type="text" name={"type"+infoData.id}/>
                            <label> {infoData.description} </label>
                            <input type="text" name={"description"+infoData.id}/>
    
                            <input type="submit" value="Modifier"/>
                        </form>
                        )}
                    </div>   
    )

   /* useEffect(() => {
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
          //  } else {
          //      return (
           //         <Redirect to={'/'} />
         //       )
         //   }   
        } else {
            return (
                <Redirect to={'/'} />
            )
        }
    }    */
}

export default AdminInfo;