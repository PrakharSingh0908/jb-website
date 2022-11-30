import React from "react";

export default function Footer() {
	return (
		<>
		<section className="footerMain" id="ContactUs">
			<img className="footerTopBg" src="/Images/RadialCircle.svg" />
			<img className="footerBottomBg" src="/Images/RadialCircle.svg" />

			<div className="leftSection">
				<div className="topLeftSection">
					<h1 className="footerHead">Contact Us</h1>
					<p><a href="mailto:jawaharbhawan@iitr.ac.in" style={{zIndex: "50"}}>jawaharbhawan@iitr.ac.in</a></p>
					<br />
					<p>9045789183</p>
					<br />
					<p>
						Jawahar Bhawan, Jawahar Bhawan Road, <br />
						IIT Roorkee, Roorkee-247667 <br />
						Uttrakhand, IN
					</p>{" "}
					<br />
				</div>
				<div className="bottomLeftSection">
					<p><a href="#top">Home</a></p>
					<p><a href="https://channeli.in/bhawan_app/complain" target="_blank">Feedback Form</a></p>
					<p><a href="https://channeli.in/bhawan_app/complain" target="_blank">Register a Complaint</a></p>
				</div>
			</div>

			<div className="rightSection">
				<h1 className="footerHead">Find Us here</h1>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.8119324506313!2d77.9000185827351!3d29.86429626323842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb368ef396751%3A0xeddda126ec67f931!2sJawahar%20Bhawan%20Rd%2C%20Indian%20Institute%20of%20Technology%20Roorkee%2C%20Roorkee%2C%20Uttarakhand%20247667!5e0!3m2!1sen!2sin!4v1649440856842!5m2!1sen!2sin"
					allowFullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
		</>
	);
}
