import React from "react"
import { Link } from "react-router-dom"

function LaporanThread() {

  return (
<div>
      <Link to="/thread/manage">
      <div id='container_middle' className='rounded-md mt-3 flex justify-center items-center h-24 border-[#F8F8F8] bg-white'>
        <div>
        <p id='jumlahthread' className='text-center text-[16px] font-source-sans'>999</p>
        <p id='keteranganthread' className='text-center text-[16px] font-source-sans'>Jumlah Thread</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default LaporanThread
