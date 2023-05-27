import React from "react";
import Footer from "../../components/molecules/Footer.molecule";
import FormLogin from "../../components/molecules/LoginPage/FormLogin.molecule";
import Navbar from "../../components/organisms/Navbar/Navbar.organism";

function Login() {
	return (
		<div>
			<Navbar textLogo="black" />
			<FormLogin />
			<div className="pt-7">
				<Footer textColor="black" />
			</div>
		</div>
	);
}

export default Login;
