import React from 'react'
import avatar from '../../../assets/avatar.svg'
import aman from '../../../assets/aman.svg'
import notAman from '../../../assets/notAman.svg'

function ProfilePicture({ isBlocked }) {
    return (
        <div className='w-[49.43px] h-[50px] mt-[8.5px] mr-[11.57px]'>
            <img src={avatar} alt='profile' />
            <img src={isBlocked ? notAman : aman} alt='aman' className='absolute left-[205px]' />
        </div>
    )
}

export default ProfilePicture