import React from "react";
import { Footer, Hero } from "../../components/molecules/";
import { Navbar } from "../../components/organisms/";

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
