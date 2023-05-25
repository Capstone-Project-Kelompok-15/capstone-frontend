import React from 'react'
import BlockUser from '../../../assets/block-user.svg'

function BlockButton() {
  return (
    <div className='w-[60px] h-[69px]'>
      <BlockUser />
      <p className='font-source-sans font-normal text-[12px]'>Blokir User</p>
    </div>
  )
}

export default BlockButton