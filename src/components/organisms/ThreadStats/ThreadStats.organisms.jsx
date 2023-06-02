import React from 'react'
import information from '../../../assets/information.svg'
import { LaporanThread } from '../../molecules'

function ThreadStats() {
    return (
        <div>

            <div className="w-full ">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
                            <div className='flex'>
                                <h3>Manage Thread</h3>
                                <img src={information} alt="" className='' />
                            </div>
                            <LaporanThread />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadStats