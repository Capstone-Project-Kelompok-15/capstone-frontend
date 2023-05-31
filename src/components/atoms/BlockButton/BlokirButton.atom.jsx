import React from 'react'
import BlockUser from '../../../assets/block-user.svg'
import { useStore } from '../../../config/zustand/store'

function BlokirButton() {
  const handleClick = useStore(state => state.setIsBlockModalClicked)

  return (
    <div className='w-[60px] h-[69px]'>
      <button type='button' onClick={() => handleClick()}>
        <img src={BlockUser} alt='block user' className='ml-[24px] mt-[6px]' />
      </button>
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>Blokir User</p>
    </div>
  )
}

export default BlokirButton