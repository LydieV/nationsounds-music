import React from "react";
import Artistes from "./Artistes";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
    return (
        
        <div>
            <Header></Header>
            <p> Page accueil </p>
            <Artistes></Artistes>
            <Footer></Footer>
            
        </div>
    )
}


export default Home;