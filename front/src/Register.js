import React from "react";
import axios from 'axios';
import {Redirect, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';
import Menu from "./Menu";

function FormRegister(props){
    return(
        <div className={"contenu"}>
            <Menu></Menu>
            <h1 className={"l-b-m"}>S’inscrire avec :</h1>
            <div className={"register-option"}>
                <button className={"Google-button"}>Google</button>
                <button className={"Facebook-button"}>Facebook</button>
            </div>
            <hr></hr>
            <h1 className={"l-b-m"}>Inscription</h1>
            <form action="#" onSubmit={props.onSignup} className={"register-form register"}>
                <input type="text" name="nom" placeholder="Votre nom"></input>
                <input type="text" name="prenom" placeholder="Votre prénom"></input>
                <input type="email" id="email" ref={props.emailRef} name="email" placeholder="Votre adresse mail"></input>
                <input type="password" ref={props.passwordRef} name="password" placeholder="Votre mot de passe"></input>
                <input type="password" ref={props.password2Ref} name="confirmpassword" placeholder="Confirmez votre mot de passe"></input>
                <p>En cliquant sur s’inscrire, vous acceptez notre politique de gestion des données.</p>
                <input type={"submit"} value={"S'inscrire"}/>
            </form>
        </div>

    );
}

function Register()  {

    const [cookies, setCookie] = useCookies(['login']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    async function onSignup(e) {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        try {
            const p = (await axios.post('https://localhost:8000/register', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    async function onSignin(e) {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        try {
            const p = (await axios.post('https://localhost:8000/login', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.email) {
        return (
            <Redirect to='/'/>
        );
    }
    return <FormRegister onSignin={onSignin} onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({component: Component, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return (
            <Route
                {...rest}
                render={routeProps => (
                    <Component {...routeProps} email={rest.allCookies.login.email}
                               token={rest.allCookies.login.token}/>
                )}
            />
        );
    }
    return <p>!!</p>;
}

function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>cities</Link>
    }else{
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export {ProtectedRoute, ProtectedLink};
export default Register;