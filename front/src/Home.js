import React from "react";
import Artistes from "./Artistes";
import Header from "./Header";


function Home() {
    return (
        <div>
            <Header></Header>
            <p> Page accueil </p>
            <Artistes></Artistes>
        </div>
    )
}


export default Home;