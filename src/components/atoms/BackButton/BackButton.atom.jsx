import React from "react"
import { Link } from "react-router-dom"
import Back from "../../../assets/back.svg"

function BackButton() {
    return (
        <Link to="/">
            <button className="flex items-center" type="button" id="buttonBack">
                <img
                    src={Back}
                    alt="back"
                    className="mr-[14.5px] ml-[153px] "
                />
                <h3 className="text-xl font-semibold">Ubah Profil</h3>
            </button>
        </Link>
    )
}

export default BackButton
