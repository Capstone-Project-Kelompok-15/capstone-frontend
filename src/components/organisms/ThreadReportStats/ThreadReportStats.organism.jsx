import React from "react"
import { CounterThreadReport } from "../../molecules"

function ThreadReportStats() {
    return (
        <div>
            <div className="w-full ">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
                            <h1 className="font-source-sans font-normal text-[20px] ">
                                Thread Report
                            </h1>
                            <CounterThreadReport />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadReportStats
