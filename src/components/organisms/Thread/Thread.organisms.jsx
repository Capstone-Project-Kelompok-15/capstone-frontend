import React from 'react'
import Information from '../../../assets/Information.svg'
import { LaporanThread, SearchBar } from '../../molecules'
import ThreadProfile from '../../molecules'

function TableThread() {
  return (
    <div>

<div className="w-full ">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
                        <div className='flex'>
                         <h3>Manage Thread</h3>
                         <img src={Information} alt="" className=''/>
                         </div>
                          <LaporanThread/>
                          <SearchBar/>
                          <ThreadProfile/>
                          <ThreadProfile/>
                          <ThreadProfile/>
                          <ThreadProfile/>
                          <ThreadProfile/>
                          <ThreadProfile/>
                        </div>
                    </div>
                </div>
            </div>

      
   
    </div>
  )
}

export default TableThread