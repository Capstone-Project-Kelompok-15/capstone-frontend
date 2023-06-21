import React from "react"
import Trash from "../../../assets/Trash1.svg"

function DeleteButton({onClick}) {
  const handleClick = () =>  {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className='w-[60px] h-[67px]'>
      <button id='buttonhapus' className='btn' type='button' onClick={() => handleClick()}>
      <img src={Trash} alt="Trash Logo" id='TrashLogo'  className='ml-[18px] mt-[4px]'/>
      <p className='font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[3px]'> Hapus Thread </p>
      </button>
    </div>
  )
}

export default DeleteButton
