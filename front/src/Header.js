import React from "react";
import Menu from './Menu';

export default function Header()  {
    return (
        <div>
        <div class="header-menu">
        <a href="./" class="logo"><img src="https://svgshare.com/i/VPB.svg" alt="logo"/></a>
        <a href="./Login" class="login"><img src="https://svgshare.com/i/VNn.svg" alt="login"/></a>
      </div>

        <div id="nav-container">
        <div class="bg"></div>
        <div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <Menu></Menu>
        </div>
      </div>
      </div>
    
    
      
    );

}


