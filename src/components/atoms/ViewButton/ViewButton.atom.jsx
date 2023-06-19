import React from "react"
import Eye from "../../../assets/Eye.svg"
import { Link } from "react-router-dom"

function ViewButton() {
  return (
    <div className='w-[60px] h-[67px]'>
      <Link to="/show" id="linkview">
    <button id='buttonhapus' className='btn' type='button'>
    <img src={Eye} alt="View Logo" id='ViewLogo'  className='ml-[18px] mt-[2px]'/>
    <p className='font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[11px]'> Lihat Thread </p>
    </button>
    </Link>
  </div>
  )
}

export default ViewButton
