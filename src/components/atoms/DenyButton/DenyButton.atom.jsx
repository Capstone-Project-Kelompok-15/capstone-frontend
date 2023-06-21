import React from "react"
import DenyVector from "../../../assets/deny.svg"

function DenyButton({ onClick }) {
    return (
        <div className="w-[60px] h-[67px]">
            <button
                type="button"
                className="btn"
                id="buttontolak"
                onClick={onClick}>
                <img
                    src={DenyVector}
                    alt="Deny Logo"
                    id="DenyLogo"
                    className="ml-[18px] mt-[2px]"
                />
                <p className="font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[11px]">
                    Tolak Laporan
                </p>
            </button>
        </div>
    )
}

export default DenyButton
