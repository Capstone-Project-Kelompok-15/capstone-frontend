import React from "react"
import Eye from "../../../assets/Eye.svg"

function ViewButton() {
    return (
        <div className="w-[60px] h-[67px]">
            <button id="buttonlihat" className="btn" type="button">
                <img
                    src={Eye}
                    alt="Eye Logo"
                    id="EyeLogo"
                    className="ml-[18px] mt-[2px]"
                />
                <p className="font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[11px]">
                    Lihat Thread
                </p>
            </button>
        </div>
    )
}

export default ViewButton
