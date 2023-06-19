import React from 'react'
import { CardStats } from '../../molecules'

function UserStats(
    {
        isExpand,
        heading,
        onlineUsersCount,
        usersCount,
        blockedUsersCount,
        mutedUsersCount
    }) {
    return (
        <div>
            <p className={isExpand ? 'font-source-sans font-semibold text-[20px] ml-[300px] text-[#000000CC]' : 'font-source-sans font-semibold text-[20px] ml-[164px] text-[#000000CC]'}>{heading}</p>
            <div className={isExpand ? 'flex gap-[20px] ml-[300px] mt-[21px]' : 'flex justify-center gap-[30px] mt-[21px]'}>
                <CardStats statsNumber={usersCount} statsTitle="Jumlah Pengguna" Link="/manageUser/total" id="total-users" isExpand={isExpand} />
                <CardStats statsNumber={onlineUsersCount} statsTitle="Pengguna Online" Link="/manageUser/online" id="online-users" isExpand={isExpand} />
                <CardStats statsNumber={blockedUsersCount} statsTitle="Jumlah Pengguna yang diblokir" Link="/manageUser/blocked" id="blocked-users" isExpand={isExpand} />
                <CardStats statsNumber={mutedUsersCount} statsTitle="Jumlah Pengguna yang dimute" Link="/manageUser/muted" id="muted-users" isExpand={isExpand} />
            </div>
        </div>
    )
}

export default UserStats