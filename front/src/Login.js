import React from "react";
import Header from "./Header";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useCookies, withCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

/*
export default function Login(){
    return(
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>
            <div className={"login-form"}>
            <h1>Connexion</h1>
                <input type="email" name="email" placeholder="Votre adresse mail"></input>
                <input type="password" name="password" placeholder="Votre mot de passe"></input>
                <button>Se connecter</button>
            </div>
            <hr></hr>
            <div className={"login-option"}>
                <p>Pas encore inscrit ?</p>
                <a href="/register">Créer un compte</a>
            </div>
        </div>

    );
}*/

function FormLogin(props){
    return(
        <div>
            <Header></Header>
            <p className={"faq"}> c'est pour le margin </p>
            
            <form action="#" onSubmit={props.onSignin} className={"login-form"}>
                <h1>Connexion</h1>
                <input type="email" id="email" ref={props.emailRef} name="email" placeholder="Votre adresse mail"/>
                <input type="password" od="password" ref={props.passwordRef} name="password" placeholder="Votre mot de passe"/>
                
                <input type="submit" value="Se connecter"/>
            </form>

            <hr></hr>
            <div className={"login-option"}>
                <p>Pas encore inscrit ?</p>
                <a href="/register">Créer un compte</a>
            </div>
        </div>

    );
}

function Login(){
    const [cookies, setCookie] = useCookies(['login']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    async function onSignup() {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        try {
            const p = (await axios.post('https://localhost:8000/signup', user));
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
    return <FormLogin onSignin={onSignin} onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({component: Component, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return (
            <Route
                {...rest}
                render={routeProps => (
                    <Component {...routeProps} username={rest.allCookies.login.username}
                               token={rest.allCookies.login.token}/>
                )}
            />
        );
    }
    return <p>!!</p>;
}

function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>cities</Link>
    }else{
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export {ProtectedRoute, ProtectedLink};
export default Login;