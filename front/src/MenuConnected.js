import React from "react";

export default function MenuConnected(props){
    return(
        <div>
            <p> Page MenuConnected </p>
            <div className={"deconnexion"} id="disconnect" id="disconnect" onClick={props.disconnect}/>
        </div>

    );
}