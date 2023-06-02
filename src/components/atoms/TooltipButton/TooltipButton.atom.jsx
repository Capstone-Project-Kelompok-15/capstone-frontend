import React from "react";
import LightTooltip from "../../../assets/LightTooltip.svg";
function TooltipButton() {
	return (
		<div className="group">
			<img
				src={LightTooltip}
				alt=""
				className="group-hover:hidden group-hover:transition"
			/>
			<div className="hidden group-hover:block p-2 bg-[#DCDCDC33] rounded-md text-sm font-bold text-[#012269] transition-all">
				<p>Terakhir Diperbaharui 2.40 PM</p>
			</div>
		</div>
	);
}

export default TooltipButton;
