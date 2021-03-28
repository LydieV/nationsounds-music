import React from "react";
import Menu from './Menu';

export default function Header()  {
    return (
        <div>
          <div className={"header-menu"}>
            <a href="./" className={"logo"}><img src="https://svgshare.com/i/VPB.svg" alt="logo"/></a>
            <a href="./Login" className={"login"}><img src="https://svgshare.com/i/VNn.svg" alt="login"/></a>
          </div>

          <div id="nav-container">
            <div className={"bg"}></div>

            <div className={"button"} tabIndex="0">
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
            </div>

            <div id="nav-content" tabindex="0">
              <Menu></Menu>
            </div>

          </div>
      </div>
    );

}


