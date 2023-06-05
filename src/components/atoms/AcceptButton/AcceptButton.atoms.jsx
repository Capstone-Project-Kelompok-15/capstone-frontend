import React from "react"
import AcceptVector from "../../../assets/accept.svg"

function AcceptButton() {
    return (
        <div>
            <a
                href=""
                className="accept-btn grid w-12 justify-items-center mx-3"
                id="buttonterima">
                <img src={AcceptVector} alt="Accept Logo" id="AcceptLogo" />
                <p className="text-center">
                    {" "}
                    Setujui <br /> Laporan{" "}
                </p>
            </a>
        </div>
    )
}

export default AcceptButton
