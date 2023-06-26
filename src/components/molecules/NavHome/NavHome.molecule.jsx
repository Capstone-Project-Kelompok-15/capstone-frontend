import React from "react"
import ProfileButtton from "../../atoms/ProfileButton/ProfileButtton.atom"
import line from "../../../assets/line.png"
import { KeluarButton } from "../../atoms"

function NavHome({ onClick, dataAdmin, imageIndex }) {
    return (
        <div className="flex items-center gap-[25px] pt-[2px] " id="navbarHome">
            <ProfileButtton dataAdmin={dataAdmin} imageIndex={imageIndex} />
            <img src={line} alt="" className="h-6" />

            <KeluarButton onClick={onClick} />
        </div>
    )
}

export default NavHome
