import React from "react";

export default function Header()  {
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
