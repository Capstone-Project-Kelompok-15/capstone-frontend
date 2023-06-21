import React from "react"
import { KeluarButtonView } from "../../../views"
import Logo from "../../atoms/Logo/Logo.atom"

import { NavHome } from "../../molecules"

function Navbar({ bgNavbar, ubahNavbar }) {
    return (
        <div
            className={`${
                bgNavbar === "bgIsLoggedIn" ? "bg-[#F8F8F8]" : "bg-transparent"
            } flex w-full py-[17px] pl-[80px] pr-[20px] justify-between items-center`}
            id="navbar">
            <Logo textLogo="black" />
            {ubahNavbar === "ubahProfil" ? <KeluarButtonView /> : <NavHome />}
        </div>
    )
}

export default Navbar
