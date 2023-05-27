import React from "react";
import { Footer, FormLogin } from "../../components/molecules/";
import { Navbar } from "../../components/organisms";

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
