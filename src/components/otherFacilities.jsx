import React from "react";
import "../app.css";

export default function OtherFacilities() {
	return (
		<section className="otherFacilitiesContainer">
			<h1>Other Facilities</h1>
			<center>
				<div className="aboutHR1 black" />
				<div className="aboutHR2 black" />
			</center>

			<div className="otherCardsContainer">
				<div className="otherCard">
					<h2>Barber/ Tailor/ Stationary</h2>
					<p>
						Jawahar Bhawan also provides you with the basic amenities including
						a barber, tailor, and a stationary shop. With ideal timings for
						students, you will never find yourself in a precarious situation.
					</p>
				</div>
				<div className="otherCard">
					<h2>Cyber Room</h2>
					<p>
						Jawahar Bhawan also provides you with the basic amenities including
						a barber, tailor, and a stationary shop. With ideal timings for
						students, you will never find yourself in a precarious situation.
					</p>
				</div>
				<div className="otherCard">
					<h2>Fruit Shop</h2>
					<p>
						Being one of the few bhawans and the only ug one to have a fruit
						shop, you can get your nutritious fill at a reasonable price.
					</p>
				</div>
			</div>
		</section>
	);
}
