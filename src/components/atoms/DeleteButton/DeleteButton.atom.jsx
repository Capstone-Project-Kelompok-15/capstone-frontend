import React from 'react'
import Trash from '../../../assets/Trash1.svg'

function DeleteButton() {
  return (
    <div className='w-[60px] h-[67px]'>
      <button id='buttonhapus' className='btn' type='button'>
      <img src={Trash} alt="Trash Logo" id='TrashLogo'  className='ml-[18px] mt-[2px]'/>
      <p className='font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[11px]'> Hapus Thread </p>
      </button>
    </div>
  )
}

export default DeleteButton
