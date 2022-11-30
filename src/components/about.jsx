import React from "react";
import "../app.css";

export default function About() {
	return (
			<section className="aboutMain" id="About">
				<div className="aboutContent">
					<h1>About Us</h1>
					<p>
						Jawahar Bhawan is one of the oldest and most beautiful
						bhawans in the institute. Whether it be due to the large
						and spacious rooms or the sprawling well-maintained
						lawns, you are sure to be mesmerized by the charm of
						Jawahar Bhawan. Being an ode to the former prime
						minister Pandit Jawaharlal Nehru, the administration
						made sure to not skimp on any facilities. Hence, this is
						the only bhawan to have its club with a billiards and
						pool table, with sports facilities such as table tennis,
						volleyball and tennis courts and other facilities like
						24-hour cyber room, Wi-Fi connectivity in each room,
						tailor, canteen and barber shop Jawahar bhawan provides
						an ideal environment for the overall development of a
						true IITian.
					</p>
				</div>
				<div className="aboutImg">
					<img className="aboutImg" src="/Images/about.png" />
				</div>
			</section>
	);
}
