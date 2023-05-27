import React from "react";
import { Footer, Hero } from "../../components/molecules";
import { Navbar } from "../../components/organisms";

function LandingPageView() {
	return (
		<div>
			<div className="bg-[url('../src/assets/hero.jpg')] bg-cover bg-center">
				<Navbar />
				<Hero />
				<Footer />
			</div>
		</div>
	);
}

export default LandingPageView;
