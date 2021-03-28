import React from "react";
import {Link} from "react-router-dom";

function Formnews()  {
    async function newsletter(e) {
    }

    return (
            <form className={"formnews"} onSubmit={e=>newsletter(e)}>
                <label>
                    Inscrivez-vous à la newsletter
                    <input type="imput" id="imput" placeholder="Votre adresse mail ..."/>
                </label>
                <input type="submit" value="Submit" />
            </form>
    );
}