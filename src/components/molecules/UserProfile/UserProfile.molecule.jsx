import React from 'react'
import { ProfilePicture, BlokirButton, MuteButton } from '../../atoms'

function UserProfile({ Name, Status, isUserBlocked, isUserMuted }) {
    const statusCondition = {
        "Aman": 'font-source-sans font-semibold text-[12px] text-[#30B221]',
        "Muted": 'font-source-sans font-semibold text-[12px] text-[#D18102]',
        "Terblokir": 'font-source-sans font-semibold text-[12px] text-[#AA1512]',
    }

    return (
        <div className='w-[1210px] h-[69px] flex mt-[16px]'>
            <ProfilePicture isBlocked={isUserBlocked} isUserMuted={isUserMuted} />

            <div className='w-[1009px] h-[34px] mt-[17.5px] mr-[14px]'>
                <h1 className='font-source-sans font-semibold text-[12px]'>{Name}</h1>
                <p className={statusCondition[Status]}>{Status}</p>
            </div>

            <MuteButton />
            <BlokirButton />
        </div>
    )
}

export default UserProfile