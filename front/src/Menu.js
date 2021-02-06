import React from "react";
import {BrowserRouter, Link, Route, Router} from "react-router-dom";
import Home from "./Home";

export default function Menu()  {
    return (
        <BrowserRouter>
            <div className={"header"}>
                <nav>
                    <Link to={'/home'}> Accueil</Link>
                </nav>
            </div>
            <Route path="/home" component={Home}/>
        </BrowserRouter>

    );

}

