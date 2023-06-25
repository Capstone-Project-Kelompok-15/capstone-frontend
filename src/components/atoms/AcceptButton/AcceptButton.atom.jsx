import React from "react"
import AcceptVector from "../../../assets/accept.svg"

function AcceptButton({ onClick }) {
    return (
        <div className="w-[60px] h-[69px]">
            <button
                type="button"
                className="btn"
                id="buttonterima"
                onClick={onClick}>
                <img
                    src={AcceptVector}
                    alt="Accept Logo"
                    id="AcceptLogo"
                    className="ml-[24px] mt-[6px] mb-[8px]"
                />
                <p className="w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]">
                    Setujui Laporan
                </p>
            </button>
        </div>
    )
}

export default AcceptButton
