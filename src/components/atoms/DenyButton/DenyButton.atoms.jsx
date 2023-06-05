import React from "react"
import DenyVector from "../../../assets/deny.svg"

function DenyButton() {
    return (
        <div>
            <a
                href=""
                className="deny-btn grid w-12 justify-items-center mx-3"
                id="buttontolak">
                <img src={DenyVector} alt="Deny Logo" id="DenyLogo" />
                <p className="text-center">
                    {" "}
                    Tolak <br /> Laporan{" "}
                </p>
            </a>
        </div>
    )
}

export default DenyButton
