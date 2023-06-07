import React from "react";
import { NavLink } from "react-router-dom";

function CardStats({ statsNumber, statsTitle, Link, hover, id }) {
	return (
		<div className="w-[280px] bg-[#FFFFFF] shadow-lg rounded-[10px]" id={id}>
			<div
				className={`flex justify-center items-center p-[22px]  ${hover && "hover:py-[28px] transition-all duration-300"
					}`}>
				<div>
					<NavLink
						to={Link}
						className={({ isActive }) =>
							isActive
								? "font-source-sans font-normal text-[16px] text-center text-blue-500"
								: "font-source-sans font-normal text-[16px] text-center"
						}>
						<p>{statsNumber}</p>
					</NavLink>
					<NavLink
						to={Link}
						className={({ isActive }) =>
							isActive
								? "font-source-sans font-normal text-[16px] text-center text-blue-500"
								: "font-source-sans font-normal text-[16px] text-center"
						}>
						<p>{statsTitle}</p>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default CardStats;