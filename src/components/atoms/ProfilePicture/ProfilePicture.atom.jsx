import React from "react"
import aman from "../../../assets/aman.svg"
import notAman from "../../../assets/notAman.svg"

function ProfilePicture({ isUserBlocked, isUserMuted, img }) {
    return (
        <div className="w-[60px] h-[50px] mt-[8.5px] mr-[11.57px] relative">
            <img
                src={img}
                alt="profile"
                className="h-[49px] w-[50px] rounded-[100px]"
            />
            <img
                src={isUserBlocked || isUserMuted ? notAman : aman}
                alt="aman"
                className="absolute bottom-0 -right-1"
            />
        </div>
    )
}

export default ProfilePicture
