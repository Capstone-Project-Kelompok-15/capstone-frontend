import React from "react"
import Logo from "../../atoms/Logo/Logo.atom"
import { KeluarButton } from "../../atoms"
import { NavHome } from "../../molecules"

function Navbar({ bgNavbar, ubahNavbar, onClick, dataAdmin, imageIndex }) {
    return (
        <div
            className={`${
                bgNavbar === "bgIsLoggedIn" ? "bg-[#F8F8F8]" : "bg-transparent"
            } flex w-full py-[17px] pl-[80px] pr-[20px] justify-between items-center`}
            id="navbar">
            <Logo textLogo="black" />
            {ubahNavbar === "ubahProfil" ? (
                <KeluarButton onClick={onClick} />
            ) : (
                <NavHome
                    onClick={onClick}
                    dataAdmin={dataAdmin}
                    imageIndex={imageIndex}
                />
            )}
        </div>
    )
}

export default Navbar
