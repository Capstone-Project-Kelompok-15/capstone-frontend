import React from 'react'
import MuteUser from '../../../assets/mute.svg'
import { useStore } from '../../../config/zustand/store'

function MuteButton() {
  const handleClick = useStore(state => state.setIsMuteModalClicked)

  return (
    <div className='w-[60px] h-[69px]'>
      <button type='button' onClick={() => handleClick()}>
        <img src={MuteUser} alt='mute user' className='ml-[24px] mt-[6px]' />
      </button>
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>Mute Pengguna</p>
    </div>
  )
}

export default MuteButton