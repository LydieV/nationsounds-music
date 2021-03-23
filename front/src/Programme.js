import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Tabs from "./Tabs";

const Programme = () => {
    let [programmeDatas, setProgrammeDatas] = useState([]);
    useEffect(() => {
        axios
        .get('https://localhost:8000/api/evenements')
        .then(datas => {
            setProgrammeDatas(datas.data["hydra:member"])
        })
    }, []);

    return(
        <div>
            <Header></Header>
            <div className={"blockSwitchProgramme"}>
                {programmeDatas.map(programmeData =>
                    <div>
                        <p>{programmeData.type}</p>
                        <p>{programmeData.horaireDebut}</p>
                        <p>{programmeData.artistes}</p>
                        
                    </div>
                    )}
                <Tabs>
                    <div title="Concerts">
                        <div class="cardsProgramme">
                        <div className={"cardProgramme"}>
                            <div className={"imgCard"}>
                                <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                            </div>
                            <div className={"contenuCard"}>
                                <p className={"horaireCard"}> 10:30</p>
                                <p className={"nomCard"}> The Weeknd</p>
                            </div>
                        </div>

                        <div className={"cardProgramme"}>
                            <div className={"imgCard"}>
                                <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                            </div>
                            <div className={"contenuCard"}>
                                <p className={"horaireCard"}> 10:30</p>
                                <p className={"nomCard"}> The Weeknd</p>
                            </div>
                        </div>

                        <div className={"cardProgramme"}>
                            <div className={"imgCard"}>
                                <img src="https://www.leparisien.fr/resizer/3egtAY3IEYZZEzy1uoQ0R2WIaYo=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WGW3K3BZCMUR2JFV7HBT6VULME.jpg" alt="img1"/>
                            </div>
                            <div className={"contenuCard"}>
                                <p className={"horaireCard"}> 10:30</p>
                                <p className={"nomCard"}> The Weeknd</p>
                            </div>
                        </div>

                        </div>
                        

                    </div>
                    <div title="Dédicaces">
                        <div>
                            <p> dédicace</p>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>

    );
}

export default Programme;