import React from "react";
import "../app.css";

export default function Landing (){
    return(
        <section className="landingMainContainer" id="Home">
        {console.log("Developed by Prabh")}
        {console.log("Designed by Pushpak")}
        <div className="landingBox">
                <img className="logo" src="/Images/logo.png" />
            <div className="landingContent">
                <h1 className="landingHead">Welcome to Jawahar Bhawan</h1>
                <p className="landingBody">In the memory of first prime minister of India, Pandit Jawahar Lal Nehru</p>
            </div>
        </div>
        <div class='slider'>
            <img src="/Images/slider.png" alt="" />
        </div>
        </section>
    )
}