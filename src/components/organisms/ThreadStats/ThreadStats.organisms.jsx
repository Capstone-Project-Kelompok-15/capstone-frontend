import React from "react"
import { LaporanThread } from "../../molecules"
import { TooltipButton } from "../../atoms"

function ThreadStats() {
    return (
        <div>
            <div className='flex'>
           <h1 className='font-source-sans font-normal text-[20px] '>Manage Thread</h1>
           <TooltipButton/>
            </div>
            <LaporanThread/>
            </div>
    )
}

export default ThreadStats;

