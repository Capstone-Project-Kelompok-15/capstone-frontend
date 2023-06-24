import React from "react"
import { Link } from "react-router-dom"
import Eye from "../../../assets/Eye.svg"

function ViewButton({
  threadList,
}) {

  return (
    <div className='w-[60px] h-[67px]'>
      <Link to={`/show/${threadList.title}`} state={threadList} id="linkview">
    <button id='buttonhapus' className='btn' type='button'>
    <img src={Eye} alt="View Logo" id='ViewLogo'  className='ml-[18px] mt-[4px]'/>
    <p className='font-source-sans font-normal text-[12px] text-center ml-[2px] mt-[3px]'> Lihat Thread </p>
    </button>
    </Link>
  </div>
  )
}

export default ViewButton
