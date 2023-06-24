import React from 'react';
import { useLocation } from 'react-router-dom';

function LihatThread({
  isExpand,
}) {
  const {state} =useLocation()
  console.log(state)
  return (
    <div>
          <div className={isExpand ? 'h-[514px] bg-white mt-[20px] px-[15px] py-[30px] w-[1180px]': 'h-[514px] bg-white mt-[20px] px-[15px] py-[30px] w-[1210px]'}>
            <div className='justify-center items-center bg-white'>
            <h1 className='text-center font-source-sans font-bold text-[24px]'>{state.title}</h1>
          </div>
          <div>
            <p className='text-justify text-[16px] font-source-sans font-normal mt-[10px] ml-[30px]'>
             {state.content}
              </p>
          </div>
          <div className='flex justify-center'>
            <img src={state.file} alt="thread picture" className='mt-[10px] w-[350px] h-[215px]'/>
            </div>
            </div>
    </div>
  )
}

export default LihatThread;