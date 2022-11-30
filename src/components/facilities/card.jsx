import React from "react"
import "../../app.css"

export default function Card(props){
    return(
        <>
        <div className="facilitiesCard" style={{flexDirection: props.sent.flexDirection}}>
            <div className="cardContent">
                <img className="cardVector" src={"/Images/card/" + props.sent.vector} />
                <div className="divider" />
                <h2 className="cardTitle">{props.sent.name}</h2>
                <p className="cardDesc">{props.sent.description}</p>
            </div>
            <img className="cardImg" src={"/Images/card/" + props.sent.img} />
        </div>
        <div className="facilitiesCardMobile" style={{flexDirection: props.sent.flexDirection}}>
            <div className="cardContentMobile">
                <div className="cardHeadMobile">
                <img className="cardVectorMobile" src={"/Images/card/" + props.sent.vector} />
                <p className="cardTitleMobile">{props.sent.name}</p>
                </div>
                <div className="divider" />
                <p className="cardDesc">{props.sent.description}</p>
            </div>
            <img className="cardImgMobile" src={"/Images/card/" + props.sent.img} />
        </div>

        </>
    )
}