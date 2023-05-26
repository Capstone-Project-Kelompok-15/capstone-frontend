import React from 'react'
import search from '../../../assets/search.svg'
import xvector from '../../../assets/xVector.svg'

function SearchBar() {
  return (
    <div className=' w-full justify-between flex rounded-md items-center h-8   bg-[#0122691a]'
           id='cari_thread'>
            <div className='flex'>
          <img src={search} alt="" className=''/>
          <input type="search" name="" id="searchbtn"  placeholder='Cari "Thread"' className='bg-transparent'/>
          </div>
          <img src={xvector} alt="" />
          </div>
  )
}

export default SearchBar