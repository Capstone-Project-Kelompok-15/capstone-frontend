import React from 'react'
import MuteUser from '../../../assets/mute.svg'

function MuteButton() {
  return (
    <div className='w-[60px] h-[69px]'>
      <button type='button'>
        <img src={MuteUser} alt='mute user' className='ml-[24px] mt-[6px]' />
      </button>
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>Mute Pengguna</p>
    </div>
  )
}

export default MuteButton