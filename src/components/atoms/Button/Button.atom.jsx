import React from "react"
import MuteUser from "../../../assets/mute.svg"
import BlockUser from "../../../assets/block-user.svg"
import UnmuteUser from "../../../assets/unmute.svg"
import UnblockUser from "../../../assets/unblock-user.svg"
import Eye from "../../../assets/Eye.svg"
import Trash from "../../../assets/Trash1.svg"

function Button({ img, altImg, buttonDesc, handleClick, id }) {
    const imgCondition = {
        mute: MuteUser,
        block: BlockUser,
        unmute: UnmuteUser,
        unblock: UnblockUser,
        eye: Eye,
        trash: Trash,
    }

    return (
        <div className="w-[60px] h-[69px]">
            <button type="button" onClick={handleClick} id={id}>
                <img
                    src={imgCondition[img]}
                    alt={altImg === "mute" ? "mute user" : "block user"}
                    className="ml-[24px] mt-[6px]"
                />
                <p className="w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]">
                    {buttonDesc}
                </p>
            </button>
        </div>
    )
}

export default Button
