import React from "react"
import { Link } from "react-router-dom"
import pp from "../../../assets/blank-pp.jpg"
import UbahProfileViewModel from "../../../views/UbahProfile/UbahProfile.viewModel"

function ProfileButtton() {
    const ubahProfileViewModel = UbahProfileViewModel()
    return (
        <Link to="/ubahprofil">
            <button
                className="flex items-center gap-2 "
                id="buttonProfile"
                type="button">
                <img src={pp} alt="" className="rounded-full w-[45px]" />
                <h3 className="text-xl font-normal text-[#012269CC] hover:outline p-2 rounded-2xl outline-1">
                    {/* Halo {`${ubahProfileViewModel.formik.values.usernameBaru}`} */}
                    Halo Admin 1
                </h3>
            </button>
        </Link>
    )
}

export default ProfileButtton
