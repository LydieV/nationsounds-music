import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";

const Artistes = () => {
    const [cookies, removeCookie] = useCookies(['login']);  
    const [loading, setLoading] = useState(true);
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

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function onUpdate(form){
        console.log(form);
     //   const artistes = {
    //        name: document.getElementById('name').value
    //    }
    //    console.log("ma table : "+artistes);
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

  //  if(loading === "true"){
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
         //   setLoading(false);
        }
        
  //  } else {
        if (cookies.login && cookies.login.email){
            //  if(adminState){
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
            /*  } else {
                  return (
                      <Redirect to={'/'} />
                 )
              }*/
              
          } else {
              return (
                  <Redirect to={'/'} />
              )
      
          }
  //  }
    

    

    

    
}


export default Artistes;