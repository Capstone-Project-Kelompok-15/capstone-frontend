import React from "react"
import { useLocation } from "react-router-dom"

function LihatThread() {
    const { state } = useLocation()
    
    const lastPostedTime = new Date(state.createdAt)
    const currentTime = new Date();

    const timeDifference = currentTime.getTime() - lastPostedTime.getTime();

    const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

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
                <h1 className="font-source-sans font-normal text-[20px] text-zinc-500">
                    {daysElapsed} hari yang lalu
                </h1>
            </div>
        </div>
    )
}

export default LihatThread
