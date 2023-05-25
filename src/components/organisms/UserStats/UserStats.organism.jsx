import React from 'react'
import { CardStats } from '../../molecules'

function UserStats() {
    return (
        <div>
            <p className='font-source-sans font-semibold text-[20px] ml-[149px] text-[#000000CC]'>Manage User</p>
            <div className='flex justify-center gap-[30px] mt-[21px]'>
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna" />
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna" />
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna" />
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna" />
            </div>
        </div>
    )
}

export default UserStats