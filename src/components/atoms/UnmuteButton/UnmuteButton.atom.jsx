import React from 'react'
import UnmuteUser from '../../../assets/unmute.svg'

function UnmuteButton() {
    return (
        <div className='w-[60px] h-[69px]'>
            <button type='button'>
                <UnmuteUser />
            </button>
            <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px]'>Buka Mute</p>
        </div>
    )
}

export default UnmuteButton