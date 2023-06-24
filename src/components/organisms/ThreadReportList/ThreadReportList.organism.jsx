import React from "react"
import { ThreadReportCard } from "../../molecules"

function ThreadReportList({ isExpand }) {
    return (
        <div>
            <div className={isExpand ? "gap-[15px] ml-[300px]" : "ml-[150px]"}>
                <ThreadReportCard isExpand={isExpand}/>
            </div>
        </div>
    )
}

export default ThreadReportList
