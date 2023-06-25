import React from "react"
import Logo from "../../atoms/Logo/Logo.atom"
import { KeluarButton } from "../../atoms"
import { NavHome } from "../../molecules"

function Navbar({ bgNavbar, ubahNavbar, onClick, dataAdmin, imageIndex }) {
    return (
        <div>
            <div
                className={`${
                    bgNavbar === "bgIsLoggedIn"
                        ? "bg-[#F8F8F8]"
                        : "bg-transparent"
                } flex w-full py-[17px] pl-[80px] pr-[20px] justify-between items-center fixed z-10`}
                id="navbar">
                <Logo textLogo="black" />
                {ubahNavbar === "ubahProfil" ? (
                    <div className="pt-[3px]">
                        <KeluarButton onClick={onClick} />
                    </div>
                ) : (
                    <NavHome
                        onClick={onClick}
                        dataAdmin={dataAdmin}
                        imageIndex={imageIndex}
                    />
                )}
            </div>
            <div
                className={`pt-[90px] ${
                    bgNavbar === "bgIsLoggedIn"
                        ? "bg-[#F8F8F8]"
                        : "bg-transparent"
                }`}
            />
        </div>
    )
}

export default Navbar
