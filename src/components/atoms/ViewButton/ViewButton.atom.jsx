import React from "react"
import Eye from "../../../assets/Eye.svg"

function ViewButton() {
    return (
        <div>
            <a
                className="btn grid w-12 justify-items-center mx-3"
                id="buttonlihat">
                <img src={Eye} alt="Eye Logo" id="EyeLogo" />
                <p className="text-center">
                    {" "}
                    Lihat <br /> Thread{" "}
                </p>
            </a>
        </div>
    )
}

export default ViewButton
