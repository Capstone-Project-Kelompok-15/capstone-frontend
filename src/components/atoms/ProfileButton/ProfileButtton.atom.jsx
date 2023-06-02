import React from "react";
import pp from "../../../assets/blank-pp.jpg";

function ProfileButtton() {
	return (
		<button className="flex items-center gap-2 " type="button">
			<img src={pp} alt="" className="rounded-full w-[45px]" />
			<h3 className="text-xl font-normal text-[#012269CC] hover:outline p-2 rounded-2xl outline-1">
				Halo Admin 1
			</h3>
		</button>
	);
}

export default ProfileButtton;
