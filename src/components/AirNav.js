import React from "react";
import AirImage from './airbnb-logo.png';


export default function AirNav(){
    return(
        <nav class='AirNav'>
            <img src={AirImage} alt="Airbnbpic" id="Airimage"/>
        </nav>      
    )
}