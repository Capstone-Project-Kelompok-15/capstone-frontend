import React from 'react'
import { CardStats } from '../../molecules'

function UserStats() {
    return (
        <div>
            <p className='font-source-sans font-semibold text-[20px] ml-[164px] text-[#000000CC]'>Manage User</p>
            <div className='flex justify-center gap-[30px] mt-[21px]'>
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna" Link="/manageUser/total" id="total-users" />
                <CardStats statsNumber={99999} statsTitle="Pengguna Online" Link="/manageUser/online" id="online-users" />
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna yang diblokir" Link="/manageUser/blocked" id="blocked-users" />
                <CardStats statsNumber={99999} statsTitle="Jumlah Pengguna yang dimute" Link="/manageUser/muted" id="muted-users" />
            </div>
        </div>
    )
}

export default UserStats