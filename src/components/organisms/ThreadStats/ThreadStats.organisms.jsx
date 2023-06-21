import React from "react"
import { useLocation } from "react-router-dom"
import { LaporanThread } from "../../molecules"
import { TooltipButton } from "../../atoms"

function ThreadStats({ isExpand }) {
    const location = useLocation()

    let pageTitle = ""
    if (location.pathname.startsWith("/thread/report")) {
        pageTitle = "Thread Report"
    } else {
        pageTitle = "Manage Thread"
    }

    return (
        <div className={isExpand ? "ml-[350px] " : "ml-[150px]"}>
            <div className="flex bg-[#F8F8F8]">
                <h1 className="font-source-sans font-normal text-[20px] ">
                    {pageTitle}
                </h1>
                <TooltipButton />
            </div>
            <LaporanThread />
        </div>
    )
}

export default ThreadStats
