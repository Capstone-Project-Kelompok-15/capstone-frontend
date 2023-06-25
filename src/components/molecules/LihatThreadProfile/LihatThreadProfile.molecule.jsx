import React from "react"
import { useLocation } from "react-router-dom"

function LihatThread() {
    const { state } = useLocation()
    return (
        <div className="flex h-[62px] gap-[12px] px-[30px] mt-[30px]">
            <img
                src={state.avatar}
                alt="profile"
                className=" w-[50px] h-[50px] rounded-[20px] ml-[17px] mt-[-6px]"
            />
            <div>
                <h1 className="font-source-sans font-bold  h-[34px] text-[24px]">
                    {state.user}
                </h1>
            </div>
        </div>
    )
}

export default LihatThread
