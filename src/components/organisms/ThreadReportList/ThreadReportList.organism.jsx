import React from "react"
import { ThreadReportCard } from "../../molecules"

function ThreadReportList({
    isExpand,
    handleAcceptClick,
    handleDenyClick,
    thread
}) {
    return (
        <div>
            <div className={isExpand ? "gap-[15px] ml-[300px]" : "ml-[150px]"}>
                <ThreadReportCard
                    isExpand={isExpand}
                    handleAcceptClick={handleAcceptClick}
                    handleDenyClick={handleDenyClick}
                    thread={thread}
                />
            </div>
        </div>
    )
}

export default ThreadReportList
