import React from "react"
import { Link } from "react-router-dom"
import pp1 from "../../../assets/pp1.png"
import pp2 from "../../../assets/pp2.png"
import pp3 from "../../../assets/pp3.png"

function ProfileButtton({ dataAdmin, imageIndex }) {
    const images = [pp1, pp2, pp3]
    return (
        <Link to="/ubahprofil">
            <button
                className="flex items-center gap-2 "
                id="buttonProfile"
                type="button">
                <img
                    src={images[imageIndex]}
                    alt=""
                    className="rounded-full w-[45px]"
                />
                <h3 className="text-xl font-normal text-[#012269CC] hover:outline p-2 rounded-2xl outline-1">
                    Halo {dataAdmin.name}
                </h3>
            </button>
        </Link>
    )
}

export default ProfileButtton
