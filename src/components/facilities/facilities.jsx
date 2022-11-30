import React from "react";
import Card from "./card.jsx";
import data from "./data.js";
import "../../app.css";

export default function Facilities() {
	return (
		<React.Fragment>
			<section className="facilitiesContainer">
				<section className="aboutMain" id="About">
					<div className="aboutContent">
						<h1>About Us</h1>
						<p>
							Jawahar Bhawan is one of the oldest and most beautiful bhawans in
							the institute. Whether it be due to the large and spacious rooms
							or the sprawling well-maintained lawns, you are sure to be
							mesmerized by the charm of Jawahar Bhawan. Being an ode to the
							former prime minister Pandit Jawaharlal Nehru, the administration
							made sure to not skimp on any facilities. Hence, this is the only
							bhawan to have its club with a billiards and pool table, with
							sports facilities such as table tennis, volleyball and tennis
							courts and other facilities like 24-hour cyber room, Wi-Fi
							connectivity in each room, tailor, canteen and barber shop Jawahar
							bhawan provides an ideal environment for the overall development
							of a true IITian.
						</p>
					</div>
					<div className="aboutImg">
						<img src="/Images/about.png" />
					</div>
				</section>
				<section className="aboutMainMobile" id="About">
					<div className="aboutContent">
						<h1>About Us</h1>
						<div className="aboutImgMobile">
							<img src="/Images/hero-min.jpg" />
						</div>
						<p>
							Jawahar Bhawan is one of the oldest and most beautiful bhawans in
							the institute. Whether it be due to the large and spacious rooms
							or the sprawling well-maintained lawns, you are sure to be
							mesmerized by the charm of Jawahar Bhawan. Being an ode to the
							former prime minister Pandit Jawaharlal Nehru, the administration
							made sure to not skimp on any facilities. Hence, this is the only
							bhawan to have its club with a billiards and pool table, with
							sports facilities such as table tennis, volleyball and tennis
							courts and other facilities like 24-hour cyber room, Wi-Fi
							connectivity in each room, tailor, canteen and barber shop Jawahar
							bhawan provides an ideal environment for the overall development
							of a true IITian.
						</p>
					</div>
				</section>
				<section id="Facilities">
				{data.map((e) => {
					return <Card sent={e} />;
				})}
				</section>

				<section className="otherFacilitiesContainer">
					<h1>Other Facilities</h1>

					<div className="otherCardsContainer">
						<div className="otherCard">
							<h2>Barber/ Tailor/ Stationary</h2>
							<p>
								Jawahar Bhawan also provides you with the basic amenities
								including a barber, tailor, and a stationary shop. With ideal
								timings for students, you will never find yourself in a
								precarious situation.
							</p>
						</div>
						<div className="otherCard">
							<h2>Cyber Room</h2>
							<p>
								Jawahar Bhawan also provides you with the basic amenities
								including a barber, tailor, and a stationary shop. With ideal
								timings for students, you will never find yourself in a
								precarious situation.
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
			</section>
		</React.Fragment>
	);
}
