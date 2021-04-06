import React from "react";
import Menu from "./Menu";
import MenuConnected from "./MenuConnected";
import {useCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Info from "./notification";
import InfoGeneral from "./notificationgeneral";

export default function Cookies(){
    const [cookies, removeCookie] = useCookies(['login']);

    function disconnect() {
        removeCookie('login');
        return(
            <Redirect to={'/'} />
        );
    }

    if (cookies.login && cookies.login.email){
        return(
            <div className={"contenu contenuCookies"}>
                <MenuConnected disconnect={e => disconnect()}/>
                <h1>Cookies</h1>
                <h2>Qu’est-ce qu’un cookie ?</h2>
                <h3 className={"l-b-m"}>Définition des cookies</h3>
                <p>Le cookie se définit comme un fichier enregistré par l’outil de navigation de la machine dans un espace de stockage dédié. Il est stocké au cours de la consultation d’un site web. Son enregistrement dans le disque dur ne donne aucunement lieu à la divulgation d’informations personnelles concernant l’internaute. Grâce à ce fichier texte, le site web peut identifier le terminal dans lequel il est déposé et mémoriser les informations nécessaires à son parcours.</p>

                <p>Ce sont des fichiers uniques. Pour répondre à la question de comment savoir si un site utilise des cookies, il suffit d’ouvrir le site et un message d’avertissement apparaît. Cette fenêtre, aussi appelée pop up de cookies, permet aux internautes de consentir à l’utilisation de cookies à chaque visite sur la plateforme. Elle n’apparaît généralement qu’une seule fois.</p>

                <h3 className={"l-b-m"}>Mode de fonctionnement des cookies</h3>
                <p>Les cookies n’identifient pas directement un utilisateur puisqu’ils ne contiennent ni nom ni prénom. Le navigateur du terminal s’en charge. Par ailleurs, le terme « cookies » peut désigner des technologies différentes, à l’instar des balises ou images numériques invisibles intégrées sur les pages web ou dans les courriels. En règle générale, la durée de vie d’un cookie est de treize mois au maximum après son enregistrement dans l’espace de stockage de la machine. Elle ne peut être prolongée au cours des nouvelles visites sur la plateforme.</p>

                <p>Les plateformes en ligne récoltent les informations sur les internautes à l’aide de leur adresse IP et de leurs cookies. L’IP permet de déterminer d’où proviennent les visiteurs, qu’il s’agisse de la ville, de la région ou du pays. Pour assurer la régularité du mode de fonctionnement des cookies, la Commission nationale de l’informatique et des libertés ou CNIL a établi une loi aidant à renforcer la protection des visiteurs de sites web.</p>               

                <h3 className={"l-b-m"}>À quoi servent les cookies ?</h3>
                <p>À la base, les cookies servent à mémoriser des informations renseignées dans un formulaire rempli sur le site. Ces renseignements peuvent être le nom, l’adresse et le mot de passe de l’utilisateur. De cette manière, ce dernier n’aura plus à entrer ces informations lors de sa prochaine visite. Il reste le seul à pouvoir accéder au fichier cookie. Certains cookies peuvent stocker un panier d’achat, tandis que d’autres permettent d’enregistrer d’autres paramètres, telles que la langue du site ou la publicité ciblée.</p>

                <p>Pour mieux appréhender l’utilité des cookies, il est nécessaire d’en distinguer les variantes, notamment les cookies :</p>

                <ul>
                    <li>De mesure d’audience ;</li>
                    <li>techniques ;</li>
                    <li>De publicité ;</li>
                    <li>De partage.</li>
                </ul>
                <Footer></Footer>
            </div>
        )
    } else {
        return(
            <div className={"contenu contenuCookies"}>
                <div className={"contenu cookies"}>
                <Menu></Menu>

                <div className={"Notifaction-home"}>
                    <Info></Info>
                </div>
                <div className={"Notifaction-home2"}>
                    <InfoGeneral></InfoGeneral>
                </div>

                <h1 className={"h1m h-cookies"}>Cookies</h1>
                <h2>Qu’est-ce qu’un cookie ?</h2>
                <h3 className={"l-b-m"}>Définition des cookies</h3>
                <p className={"cookie-paragrahe"}>Le cookie se définit comme un fichier enregistré par l’outil de navigation de la machine dans un espace de stockage dédié. Il est stocké au cours de la consultation d’un site web. Son enregistrement dans le disque dur ne donne aucunement lieu à la divulgation d’informations personnelles concernant l’internaute. Grâce à ce fichier texte, le site web peut identifier le terminal dans lequel il est déposé et mémoriser les informations nécessaires à son parcours.</p>

                <p className={"cookie-paragrahe"}>Ce sont des fichiers uniques. Pour répondre à la question de comment savoir si un site utilise des cookies, il suffit d’ouvrir le site et un message d’avertissement apparaît. Cette fenêtre, aussi appelée pop up de cookies, permet aux internautes de consentir à l’utilisation de cookies à chaque visite sur la plateforme. Elle n’apparaît généralement qu’une seule fois.</p>

                <h3 className={"l-b-m"}>Mode de fonctionnement des cookies</h3>
                <p className={"cookie-paragrahe"}>Les cookies n’identifient pas directement un utilisateur puisqu’ils ne contiennent ni nom ni prénom. Le navigateur du terminal s’en charge. Par ailleurs, le terme « cookies » peut désigner des technologies différentes, à l’instar des balises ou images numériques invisibles intégrées sur les pages web ou dans les courriels. En règle générale, la durée de vie d’un cookie est de treize mois au maximum après son enregistrement dans l’espace de stockage de la machine. Elle ne peut être prolongée au cours des nouvelles visites sur la plateforme.</p>

                <p className={"cookie-paragrahe"}>Les plateformes en ligne récoltent les informations sur les internautes à l’aide de leur adresse IP et de leurs cookies. L’IP permet de déterminer d’où proviennent les visiteurs, qu’il s’agisse de la ville, de la région ou du pays. Pour assurer la régularité du mode de fonctionnement des cookies, la Commission nationale de l’informatique et des libertés ou CNIL a établi une loi aidant à renforcer la protection des visiteurs de sites web.</p>               

                <h3 className={"cookie-paragrahe"}>À quoi servent les cookies ?</h3>
                <p className={"cookie-paragrahe"}>À la base, les cookies servent à mémoriser des informations renseignées dans un formulaire rempli sur le site. Ces renseignements peuvent être le nom, l’adresse et le mot de passe de l’utilisateur. De cette manière, ce dernier n’aura plus à entrer ces informations lors de sa prochaine visite. Il reste le seul à pouvoir accéder au fichier cookie. Certains cookies peuvent stocker un panier d’achat, tandis que d’autres permettent d’enregistrer d’autres paramètres, telles que la langue du site ou la publicité ciblée.</p>

                <p className={"cookie-paragrahe"}>Pour mieux appréhender l’utilité des cookies, il est nécessaire d’en distinguer les variantes, notamment les cookies :</p>

                <ul>
                    <li>De mesure d’audience ;</li>
                    <li>techniques ;</li>
                    <li>De publicité ;</li>
                    <li>De partage.</li>
                </ul>
                <h3 className={"l-b-m"}>Nos cookies</h3>
                <p className={"cookie-paragrahe"}>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte.</p>
                <p className={"cookie-paragrahe"}>Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation</p>
                </div>
                <Footer></Footer>
            </div>
    
        )
    }
}