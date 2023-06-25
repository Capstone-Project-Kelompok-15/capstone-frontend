import React from "react";
import ProfileButtton from "../../atoms/ProfileButton/ProfileButtton.atom";
import line from "../../../assets/line.png";
import KeluarButton from "../../atoms/KeluarButton/KeluarButton.atom";

function NavHome() {
	return (
		<div className="flex items-center gap-[25px] pt-[2px] pr-16" id="navbarHome">
			<ProfileButtton />
			<img src={line} alt="" className="h-6" />
			<KeluarButton />
		</div>
	);
}

export default NavHome;
