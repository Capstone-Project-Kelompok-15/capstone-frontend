import React from 'react'
import UnblockUser from '../../../assets/unblock-user.svg'

function UnblockButton() {
    return (
        <div className='w-[60px] h-[69px]'>
            <UnblockUser />
            <p className='font-source-sans font-normal text-[12px]'>Buka Blokir</p>
        </div>

    )
}

export default UnblockButton