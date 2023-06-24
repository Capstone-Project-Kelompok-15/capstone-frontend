import React from "react"
import { useLocation } from "react-router-dom"
import { LaporanThread } from "../../molecules"
import { TooltipButton } from "../../atoms"

function ThreadStats({ isExpand,
threadList,
}) {
    const location = useLocation()

    let pageTitle = ""
    if (location.pathname.startsWith("/thread/report")) {
        pageTitle = "Thread Report"
    } else {
        pageTitle = "Manage Thread"
    }

    return (
        <div className={isExpand ? "ml-[300px] " : "ml-[155px]"}>
            <div className="flex bg-[#F8F8F8] ">
                <h1 className="font-source-sans font-normal text-[20px]">
                    {pageTitle}
                </h1>
                <div className="ml-[20px] mt-[7px]">
                <TooltipButton />
                </div>
            </div>
            <LaporanThread isExpand={isExpand}
            threadList={threadList}
            />
        </div>
    )
}

export default ThreadStats
