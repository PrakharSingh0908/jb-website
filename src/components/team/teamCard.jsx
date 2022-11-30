import React from "react";
import "../../app.css";

export default function TeamCard(props) {
	return (
		<div className="teamCard">
			<div className="overlay">
				<div>
					<a href={"mailto:" + props.props.email}>{props.props.email}</a>
					<br />
					<br />
					<p>{props.props.phone}</p>
				</div>
			</div>
			<div className="cardTop">
				<p className="cardDesignation">{props.props.designation}</p>
				<hr className="teamCardDivider" />
			</div>
			<div className="cardMiddle">
				{/* <div className="cardBlock1" /> */}
				<img src={"/Images/team/" + props.props.img} />
				{/* <div className="cardBlock2" /> */}
			</div>
			<div className="cardName">{props.props.name}</div>
		</div>
	);
}
