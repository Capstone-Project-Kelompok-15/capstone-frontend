import React from "react";
import logo from "../../../assets/logo.png";

function Logo({ textLogo }) {
	return (
		<div className="flex items-center gap-[32px] pt-[1px] pl-[3px]">
			<img src={logo} alt="" className="w-14" />
			{/* <h3 className="text-2xl font-bold text-white">Squad Space</h3> */}
			<h3
				className={`${
					textLogo === "black" ? "text-black" : "text-white"
				} text-2xl font-bold pl-[1px]`}>
				Squad Space
			</h3>
		</div>
	);
}

export default Logo;
