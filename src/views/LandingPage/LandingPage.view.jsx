import React from "react";
import { Link } from "react-router-dom";
import { ButtonMasuk, Logo } from "../../components/atoms";
import { Footer, Hero } from "../../components/molecules";
import { Navbar } from "../../components/organisms";
import Login from "../Login/Login.view";

function LandingPageView() {
	return (
		<div>
			<div className="bg-[url('../src/assets/hero.jpg')] bg-cover bg-center">
				<div className="flex min-w-screen py-[17px] px-[80px] justify-between items-center">
					<Logo />
					<Link to="/login">
						<ButtonMasuk />
					</Link>
				</div>
				<Hero />
				<Footer />
			</div>
		</div>
	);
}

export default LandingPageView;
