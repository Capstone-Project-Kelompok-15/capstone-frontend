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
        <div className={isExpand ? "ml-[300px]" : "ml-[150px]"}>
            <div className="flex bg-[#F8F8F8]">
                <h1
                    className={
                        isExpand
                            ? "font-source-sans font-semibold text-[20px] text-[#000000CC]"
                            : "font-source-sans font-semibold text-[20px] text-[#000000CC] ml-3 mr-2.5"
                    }>
                    {pageTitle}
                </h1>
                <TooltipButton />
            </div>

            <LaporanThread isExpand={isExpand} />
        </div>
    )
}

export default ThreadStats
