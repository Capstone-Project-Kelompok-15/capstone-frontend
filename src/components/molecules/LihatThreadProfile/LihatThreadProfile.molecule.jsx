import React from 'react';
import avatar from '../../../assets/avatar.svg'

function LihatThread() {
  return (

      <div className='flex w-[1210px] h-[62px] gap-[12px] px-[30px]'>
        <img src={avatar} alt="profile"  className='ml-[17px] mt-[-6px]'/>
        <div>
          <h1 className='font-source-sans font-bold w-[99px] h-[34px]'>Joko Saja</h1>
        </div>
      </div>

  )
}

export default LihatThread;