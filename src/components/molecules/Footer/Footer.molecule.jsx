import React from "react";

function Footer({ textColor }) {
	return (
		<div>
			<div
				className={`${
					textColor == "black" ? "text-black" : "text-white"
				} text-base font-normal text-center py-[25px] pb-[80px]`}>
				© 2023 Squad Space
			</div>
		</div>
	);
}

export default Footer;
