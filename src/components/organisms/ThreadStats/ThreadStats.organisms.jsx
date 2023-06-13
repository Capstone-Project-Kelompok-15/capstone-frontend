import React from 'react'
import Information from '../../../assets/information.svg'
import { LaporanThread } from '../../molecules'

function ThreadStats() {
    return (
        <div>
            <div className='flex'>
           <h1 className='font-source-sans font-normal text-[20px] '>Manage Thread</h1>
            <img src={Information} alt="" className='ml-[15px]'/> 
            </div>
            <LaporanThread/>
            </div>
    )
}

export default ThreadStats;