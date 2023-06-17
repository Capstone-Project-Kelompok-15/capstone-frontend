import React from 'react'
import { NavLink } from 'react-router-dom'

function CardStats({ statsNumber, statsTitle, Link, id }) {
    return (
        <div className='w-[280px] h-[93px] bg-[#FFFFFF] shadow-lg rounded-[10px]' id={id}>
            <div className='w-[260px] h-[73px] p-[10px] mt-[10px]'>
                <NavLink to={Link} className={({ isActive }) =>
                    isActive ? "font-source-sans font-normal text-[16px] text-center text-blue-500" : "font-source-sans font-normal text-[16px] text-center"
                }>
                    <p>{statsNumber}</p>
                </NavLink>
                <NavLink to={Link} className={({ isActive }) =>
                    isActive ? "font-source-sans font-normal text-[16px] text-center text-blue-500" : "font-source-sans font-normal text-[16px] text-center"
                }>
                    <p>{statsTitle}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default CardStats