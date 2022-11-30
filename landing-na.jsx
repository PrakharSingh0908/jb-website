import React from "react";
import "../app.css"

export default function Landing(){
    return(
        <section className="landingMainGradient" id="Home">
            <img className="landingMainGradientImg" src="/Images/Gradient.png" />
            <img className="landingMainGradientImg opacity" src="/Images/Frame 1.png" />
                <div className="landingMain">
                    <div className="logoContainer">
                        <img className="logo" id="top" src="/Images/logo.png" />
                    </div>
                    <div className="landingHero">
                        <div className="landingGrid">
                            <img src="/Images/facilities/diet.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/restaurant.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/tailor.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/snooker.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/logo.svg" className="landingGridItems center"/>
                            <img src="/Images/facilities/barber.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/gym.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/laundry.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/stationary.svg" className="landingGridItems right"/>
                        </div>
                        <div className="landingGridContent">
                            <h3 className="landingTitle">Welcome to Jawahar Bhawan</h3>
                            <hr />
                            <p className="landingDesc">In the memory of first prime minister of India, Pandit Jawahar Lal Nehru</p>
                        </div>
                    </div>

                </div>
        </section>
    )
} 