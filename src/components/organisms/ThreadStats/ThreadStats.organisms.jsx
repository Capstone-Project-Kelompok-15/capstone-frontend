import React from "react"
import { useLocation } from "react-router-dom"
import { LaporanThread } from "../../molecules"
import { TooltipButton } from "../../atoms"

function ThreadStats({ isExpand, time }) {
    const location = useLocation()

    let pageTitle = ""
    if (location.pathname.startsWith("/thread/report")) {
        pageTitle = "Thread Report"
    } else {
        pageTitle = "Manage Thread"
    }

    return (
        <div>
            <div className="flex items-center bg-[#F8F8F8]">
                <h1
                    className={
                        isExpand
                            ? "font-source-sans font-semibold text-[20px] text-[#000000CC] mr-2.5"
                            : "font-source-sans font-semibold text-[20px] text-[#000000CC] mr-2.5"
                    }
                    id={
                        pageTitle === "Thread Report"
                            ? "thread-report"
                            : "manage-thread"
                    }>
                    {pageTitle}
                </h1>
                <TooltipButton time={time} />
            </div>

            <LaporanThread isExpand={isExpand} />
        </div>
    )
}

export default ThreadStats
