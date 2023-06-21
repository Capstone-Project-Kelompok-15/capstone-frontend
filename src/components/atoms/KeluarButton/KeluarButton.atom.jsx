import React from "react"
import logout from "../../../assets/logout.png"

function KeluarButton() {
    return (
        <div className="pr-16">
            <button
                className="flex items-center gap-2 hover:outline p-2 rounded-2xl outline-1 outline-[#DA0000CC] "
                type="button"
                id="buttonKeluar">
                <img src={logout} alt="" />
                <h3 className="text-xl font-bold text-[#DA0000CC] ">Keluar</h3>
            </button>
        </div>
    )
}

export default KeluarButton
