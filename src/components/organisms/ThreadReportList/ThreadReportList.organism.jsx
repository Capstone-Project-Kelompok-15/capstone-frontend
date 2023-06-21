import React from "react"
import { ThreadReportCard } from "../../molecules"

function ThreadReportList({ isExpand }) {
    return (
        <div>
            {/* <div className="w-full">
                <div
                    className={
                        isExpand ? "ml-[350px]" : "container mx-auto px-20"
                    }>
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
                            <ThreadReportCard />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={isExpand ? "gap-[15px] ml-[300px]" : "ml-[150px]"}>
                <ThreadReportCard />
            </div>
        </div>
    )
}

export default ThreadReportList
