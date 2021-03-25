import React from "react";
import Menu from './Menu';

export default function Header()  {
    return (
        <header class="header">
        <a href="./" class="logo"><img src="https://svgshare.com/i/VPB.svg" alt="logo"/></a>
        <a href="./Login" class="login"><img src="https://svgshare.com/i/VNn.svg" alt="login"/></a>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        

        <ul class="menu">
         <Menu></Menu>
        </ul>
      </header>
    );

}


