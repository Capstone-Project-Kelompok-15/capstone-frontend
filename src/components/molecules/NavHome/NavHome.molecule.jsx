import React from "react"
import ProfileButtton from "../../atoms/ProfileButton/ProfileButtton.atom"
import line from "../../../assets/line.png"
import KeluarButtonView from "../../../views/KeluarButtonView/KeluarButton.view"

function NavHome() {
    return (
        <div className="flex items-center gap-[25px] pt-[2px] " id="navbarHome">
            <ProfileButtton />
            <img src={line} alt="" className="h-6" />

            <KeluarButtonView />
        </div>
    )
}

export default NavHome
