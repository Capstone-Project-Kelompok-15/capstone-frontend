import React from "react";
import logo from "../../assets/logo.png";
import pp from "../../assets/blank-pp.jpg";
import line from "../../assets/line.png";
import logout from "../../assets/logout.png";
import ButtonMasuk from "../../atoms/MasukButton/ButtonMasuk.atom";

function Navbar({ textLogo }) {
	return (
		<div className="container">
			<div className="flex w-full py-[20px] pl-[76px] pr-[80px] justify-between items-center">
				<div className="flex items-center gap-[30px]">
					<img src={logo} alt="" className="w-14" />
					{/* <h3 className="text-2xl font-bold text-white">Squad Space</h3> */}
					<h3
						className={`${
							textLogo == "black" ? "text-black" : "text-white"
						} text-2xl font-bold`}>
						Squad Space
					</h3>
				</div>
				{/* Landing Page */}
				{/* <div>
					<ButtonMasuk />
				</div> */}
				{/* Home */}
				<div className="flex items-center gap-7">
					<div className="flex items-center gap-6">
						<img src={pp} alt="" className="rounded-full w-11" />
						<h3 className="text-xl font-normal text-[#012269CC] opacity-80">
							Halo Admin 1
						</h3>
						<img src={line} alt="" className="h-6" />
					</div>
					<button className="flex items-center gap-2">
						<img src={logout} alt="" />
						<h3 className="text-xl font-bold text-[#DA0000CC] opacity-80">Keluar</h3>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
