import React from "react";
import reactjs from "../../reactjs.svg";
import "./main.css";

export default function Main(){
    return (
        <div className="body">
            <div className="title">
                <h2>Fun facts about React</h2>
            </div>
            <div className="points">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <div className="log">
                <img src={reactjs} alt=" " />
            </div>
            
        </div>

    );
}