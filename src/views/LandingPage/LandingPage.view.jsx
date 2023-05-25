import React from "react";
import Footer from "../../components/molecules/Footer.molecule";
import Hero from "../../components/molecules/LandingPage/Hero.molecule";
import Navbar from "../../components/organisms/Navbar.organism";

function LandingPage() {
	return (
		<div className="">
			{/* <div> */}
			<div className="bg-[url('../src/assets/hero.jpg')] bg-cover bg-center">
				<Navbar />
				<Hero />
				<Footer />
			</div>
		</div>
	);
}

export default LandingPage;
