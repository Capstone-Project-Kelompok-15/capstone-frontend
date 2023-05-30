import React from 'react'
import {ThreadProfile } from '../../molecules'

function ThreadList() {
  return (
    <div>

<div className="w-full ">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
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

export default ThreadList