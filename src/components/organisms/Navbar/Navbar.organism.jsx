import React from "react";
import Logo from "../../atoms/Logo/Logo.atom";

import { NavHome } from "../../molecules";

function Navbar({ bgNavbar, loginNavbar }) {
	return (
		<div
			className={`${
				bgNavbar === "bgIsLoggedIn" ? "bg-[#F8F8F8]" : "bg-transparent"
			} flex min-w-screen py-[17px] pl-[80px] pr-[20px] justify-between items-center`}>
			<Logo textLogo={"black"} />
			{loginNavbar === "isLoggedIn" ? <NavHome /> : <div />}
		</div>
	);
}

export default Navbar;
