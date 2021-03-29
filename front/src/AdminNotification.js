import React from "react";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import MenuConnected from "./MenuConnected";

const AdminNotification = () => {
    const [cookies, removeCookie] = useCookies(['login']);  
  //  const [loading, setLoading] = useState(true);
 //   const [admin, setAdmin] = useState(false);
 //   const [user, setUser] = useState(false);

  //  let [userDatas, setUserDatas] = useState([]);
    let [notificationDatas, setNotificationDatas] = useState([]); // variable magique qui lorsuqe nous la modifions relance le rendering Artiste
    
    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    async function getNotification(){
        await axios
        .get('https://localhost:8000/api/notifications')
        .then(datas => {
            setNotificationDatas(datas.data["hydra:member"])
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

    function modifNotification(e, element){
        e.preventDefault();
        let id = document.querySelector("input[name='id"+element+"']").value;
        let titre = document.querySelector("input[name='titre"+element+"']").value;
        let type = document.querySelector("input[name='type"+element+"']").value;
        let date = document.querySelector("input[name='date"+element+"']").value;
        let notification = {
            id: id,
            titre: titre,
            type: type,
            date: date
        }
        if(titre === '' || type === '' || date === ''){
            alert("Remplissez tous les champs de la notification");
        } else {
            axios.put('https://localhost:8000/notifications/'+id, {notification});
        }
    }

    function ajoutNotification(e){
        e.preventDefault();
        let titre = document.querySelector("input[name='newTitre']").value;
        let type = document.querySelector("input[name='newType']").value;
        let date = document.querySelector("input[name='newDate']").value;
        let newNotification = {
            titre: titre,
            type: type,
            date: date
        }

        axios.post('https://localhost:8000/notifications', {newNotification});
    }

    useEffect(() => {
        getNotification()
    }, []);

    return(
        <div className={"contenu"}>
                        <MenuConnected disconnect={e => disconnect()}></MenuConnected>

                        <form action="#" onSubmit={e => ajoutNotification(e)}>
                            <input type="text" name="newTitre" placeholder="Titre"/>
                            <input type="text" name="newType" placeholder="Type"/>
                            <input type="text" name="newDate" placeholder="Date"/>

                            <input type="submit" value="Ajouter"/>
                        </form>

                        <p> Liste des notifications</p>
                        {notificationDatas.map(notificationData =>
                        <form action="#" onSubmit={e => modifNotification(e, notificationData.id)}>
                            <input type="text" name={"id"+notificationData.id} value={notificationData.id} />
                            <label> {notificationData.titre} </label>
                            <input type="text" name={"titre"+notificationData.id} />
                            <label> {notificationData.type} </label>
                            <input type="text" name={"type"+notificationData.id}/>
                            <label> {notificationData.date} </label>
                            <input type="text" name={"date"+notificationData.id}/>
    
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

export default AdminNotification;