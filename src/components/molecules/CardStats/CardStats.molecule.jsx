import React from "react"
import { NavLink } from "react-router-dom"

function CardStats({ statsNumber, statsTitle, hover, Link, id }) {
    return (
        <div
            className="w-[280px] flex justify-center items-center bg-[#FFFFFF] shadow-lg rounded-[10px] cursor-pointer"
            id={id}>
            <div
                className={`w-[260px] p-6 transition-all duration-300 ${
                    hover && "hover:p-8"
                }`}>
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
    )
}

export default CardStats
