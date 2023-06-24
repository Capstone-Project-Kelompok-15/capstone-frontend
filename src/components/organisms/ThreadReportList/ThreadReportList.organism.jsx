import React from "react"
import { ThreadReportCard } from "../../molecules"

function ThreadReportList({ isExpand, getReport }) {
    return (
        <div>
            <div className={isExpand ? "gap-[15px] ml-[300px]" : "ml-[150px]"}>
                <ThreadReportCard isExpand={isExpand} getReport={getReport} />
            </div>
        </div>
    )
}

export default ThreadReportList
