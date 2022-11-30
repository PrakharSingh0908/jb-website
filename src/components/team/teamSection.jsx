import React, { useState } from "react";
import "../../app.css"
import TeamCard from "./teamCard";
import dataWardens, {dataSecy} from "./data.js"

export default function TeamSection(){
    const [section, setSection] = useState("Wardens");

    const handleClick = (e) =>{
        let value = e.target.id;
        (value === "WardensBtn") ? setSection("Wardens") : setSection("Secy");
    }

    return(
        <section className="teamSection" id="Team">
            <h1 className="teamHeading">Meet the Team</h1>
            <div className="teamButtons">
                <button className={(section === "Wardens")&&"active"} onClick={handleClick} id="WardensBtn">Wardens</button>
                <button className={(section === "Secy")&&"active"} onClick={handleClick} id="SecyBtn">Secretaries</button>
            </div>
            <div className="teamCards">
                {section === "Wardens"?
                    dataWardens.map((e) => {return <TeamCard props={e} />})
                    :
                    dataSecy.map((e) => {return <TeamCard props={e} />})
                }
            </div>
        </section>
    )
}