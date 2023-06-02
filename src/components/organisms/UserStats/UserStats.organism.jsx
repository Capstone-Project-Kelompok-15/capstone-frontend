import React from 'react'
import { CardStats } from '../../molecules'
import { useStore } from '../../../config/zustand/store'

function UserStats() {
    const totalUsers = useStore(state => state.totalUsers)
    const totalOnlineUsers = useStore(state => state.totalOnlineUsers)
    const totalBlockedUsers = useStore(state => state.totalBlockedUsers)
    const totalMutedUsers = useStore(state => state.totalMutedUsers)

    return (
        <div>
            <p className='font-source-sans font-semibold text-[20px] ml-[164px] text-[#000000CC]'>Manage User</p>
            <div className='flex justify-center gap-[30px] mt-[21px]'>
                <CardStats statsNumber={totalUsers} statsTitle="Jumlah Pengguna" Link="/manageUser/total" id="jumlah-pengguna" />
                <CardStats statsNumber={totalOnlineUsers} statsTitle="Pengguna Online" Link="/manageUser/online" id="pengguna-online" />
                <CardStats statsNumber={totalBlockedUsers} statsTitle="Jumlah Pengguna yang diblokir" Link="/manageUser/blocked" id="pengguna-diblokir" />
                <CardStats statsNumber={totalMutedUsers} statsTitle="Jumlah Pengguna yang dimute" Link="/manageUser/muted" id="pengguna-dimute" />
            </div>
        </div>
    )
}

export default UserStats