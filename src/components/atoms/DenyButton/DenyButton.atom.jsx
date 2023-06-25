import React from "react"
import DenyVector from "../../../assets/deny.svg"

function DenyButton({ onClick }) {
    return (
        <div className="w-[60px] h-[69px]">
            <button
                type="button"
                className="btn"
                id="buttontolak"
                onClick={onClick}>
                <img
                    src={DenyVector}
                    alt="Deny Logo"
                    id="DenyLogo"
                    className="ml-[24px] mt-[6px] mb-[8px]"
                />
                <p className="w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]">
                    Tolak Laporan
                </p>
            </button>
        </div>
    )
}

export default DenyButton
