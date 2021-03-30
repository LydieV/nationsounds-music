import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";

const Partenaires = () => {
    const [cookies, removeCookie] = useCookies(['login']);
    let [partenaireDatas, setPartenaireDatas] = useState([]);
    
    useEffect(() => {
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

                <h1 className={"l-b-m"}>Nos Partenaires</h1>
                    <div className={"card-list"}>
                        {partenaireDatas.map(partenaireData =>
                        <div>
                            <div className={"card-partenaire"}>
                                <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                                <p className={"text-partenaire"}>{partenaireData.nom}</p>
                            </div>
                        </div>
                        )}
                    <Footer></Footer>
                    </div>
            </div>
        )
    } else {
        return (
            <div className={"contenu"}>
                <Menu></Menu>
                <h1 className={"l-b-m"}>Nos Partenaires</h1>
                    <div className={"card-list"}>
                        {partenaireDatas.map(partenaireData =>
                        <div>
                            <div className={"card-partenaire"}>
                                <img className={"img-partenaire"} src={partenaireData.image} alt="img-partenaire"></img>
                                <p className={"text-partenaire"}>{partenaireData.nom}</p>
                            </div>
                        </div>
                        )}
                    <Footer></Footer>
                    </div>
            </div>
        )
    }

    
}


export default Partenaires;