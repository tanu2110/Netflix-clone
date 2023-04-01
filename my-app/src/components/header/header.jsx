import React from "react";
import logo from "../../logo.svg";
import "./header.css";


export default function Header(){
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="React"/>
            </div>
            
        </header>

    );
}