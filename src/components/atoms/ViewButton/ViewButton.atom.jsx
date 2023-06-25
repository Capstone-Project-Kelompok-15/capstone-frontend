import React from "react"
import { Link } from "react-router-dom"
import Eye from "../../../assets/Eye.svg"

function ViewButton() {
    return (
        <div className="w-[60px] h-[69px]">
            <Link to="/show" id="linkview">
                <button id="buttonhapus" className="btn" type="button">
                    <img
                        src={Eye}
                        alt="View Logo"
                        id="ViewLogo"
                        className="ml-[24px] mt-[6px] mb-[8px]"
                    />
                    <p className="w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]">
                        Lihat Thread
                    </p>
                </button>
            </Link>
        </div>
    )
}

export default ViewButton
