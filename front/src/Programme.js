import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Programme(){
    return(
        <div>
            <Header></Header>
            <div className={"blockSwitchProgramme"}>
                <Tabs>
                    <div title="Concert">
                        <p> un concert</p>
                        <p> deux concerts </p>
                    </div>
                    <div title="Dédicaces">
                        <p> dédicace</p>
                        <p> dédicace ensemble </p>
                    </div>
                </Tabs>
            </div>
            <div>
                
                <div className={"blockConcerts"}>
                
                </div>
                <div className={"blockDedicaces"}>
                    
                </div>
            </div>
        </div>

    );
}