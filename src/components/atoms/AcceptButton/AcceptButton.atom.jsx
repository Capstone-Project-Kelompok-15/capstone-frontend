import React from "react"
import AcceptVector from "../../../assets/accept.svg"

function AcceptButton() {
    return (
        <div className="w-[60px] h-[67px]">
            <button type="button" className="btn" id="buttonterima">
                <img
                    src={AcceptVector}
                    alt="Accept Logo"
                    id="AcceptLogo"
                    className="ml-[18px] mt-[2px]"
                />
                <p className="font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[11px]">
                    Setujui Laporan
                </p>
            </button>
        </div>
    )
}

export default AcceptButton
