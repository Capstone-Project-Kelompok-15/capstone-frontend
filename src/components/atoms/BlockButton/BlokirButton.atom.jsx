import React from 'react'
import BlockUser from '../../../assets/block-user.svg'

function BlokirButton() {
  return (
    <div className='w-[60px] h-[69px]'>
      <button type='button'>
        <img src={BlockUser} alt='block user' className='ml-[24px] mt-[6px]' />
      </button>
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>Blokir User</p>
    </div>
  )
}

export default BlokirButton