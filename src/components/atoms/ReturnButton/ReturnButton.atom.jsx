import React from 'react'
import Return from '../../../assets/Return.svg'


function ReturnButton() {
  return (
    <div>
      <Link to="/thread/manage" id="linkkembali">
      <button id='buttonkembali' className='btn flex w-[1213px] h-[48px] p-2 gap-[10px]' type='button'>
      <img src={Return} alt="Return Logo" id='ReturnLogo' className='ml-[10px] mt-[12px]' />
      <p className='not-italic font-semibold text-blue-700 ml-[14px] mt-[5px]'>Kembali Ke Manage Thread </p>
      </button>
      </Link>
    </div>
  )
}

export default ReturnButton