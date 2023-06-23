import React from "react"

import { useStore } from "../../../config/zustand/store"
import { Modal } from "../../organisms"
import logout from "../../../assets/logout.png"

function KeluarButton({ onClick }) {
    return (
        <div>
            <div className="pr-16">
                <button
                    className="flex items-center gap-2 hover:outline p-2 rounded-2xl outline-1 outline-[#DA0000CC] "
                    type="button"
                    id="buttonKeluar"
                    onClick={onClick}>
                    <img src={logout} alt="" />
                    <h3 className="text-xl font-bold text-[#DA0000CC] ">
                        Keluar
                    </h3>
                </button>
            </div>
        </div>
    )
}

export default KeluarButton
