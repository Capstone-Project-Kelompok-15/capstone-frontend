import React from 'react'
import search from '../../../assets/search.svg'
import xvector from '../../../assets/xVector.svg'

function SearchBar() {
  return (
    <div className=' w-96 rounded-md flex justify-between items-center h-8 w-[1210px] mt-3 bg-[#0122691a]'
           id='cari_thread'>
            <div className='flex'>
          <img src={search} alt="" className='mr-3'/>
          <input type="search" name="" id="searchbtn"  placeholder='Cari "Thread"' className='bg-transparent w-[1115px]'/>
          </div>
          <img src={xvector} alt="" />
          </div>
  )
}

export default SearchBar