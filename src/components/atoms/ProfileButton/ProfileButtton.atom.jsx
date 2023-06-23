import React from "react"
import { Link } from "react-router-dom"
import pp1 from "../../../assets/pp1.png"
// import LoginViewModel from "../../../views/Login/Login.viewModel"

function ProfileButtton() {
    // const loginViewModel = LoginViewModel()
    return (
        <Link to="/ubahprofil">
            <button
                className="flex items-center gap-2 "
                id="buttonProfile"
                type="button">
                <img src={pp1} alt="" className="rounded-full w-[45px]" />
                <h3 className="text-xl font-normal text-[#012269CC] hover:outline p-2 rounded-2xl outline-1">
                    {/* Halo {`${ubahProfileViewModel.formik.values.usernameBaru}`} */}
                    {/* Halo {loginViewModel.formik.values.name} */}
                    Halo Admin 1
                </h3>
            </button>
        </Link>
    )
}

export default ProfileButtton
