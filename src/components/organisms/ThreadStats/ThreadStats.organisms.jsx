import React from 'react'
import { LaporanThread } from '../../molecules'
import { TooltipButton } from "../../atoms"

function ThreadStats(
    {
        isExpand,
}) {
    return (
        <div className={isExpand ? 'ml-[300px] ':'ml-[150px]'}>
            <div className='flex bg-[#F8F8F8]'>
           <h1 className='font-source-sans font-normal text-[20px] '>Manage Thread</h1>
           <TooltipButton/>
            </div>
            <LaporanThread/>
            </div>
        </div>
    )
}

export default ThreadStats
