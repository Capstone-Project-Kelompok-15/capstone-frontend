import React from 'react'
import Table_Thread from '../component/table_thread'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Group3 from '../assets/Group 3.png'


function Manage_Thread_Body() {
  return (
    <div className='flex justify-center'>
        <div>
          <div className='flex'>
          <h3>Manage Thread</h3>
         <img src={Vector} alt="" className=''/>
        </div>

          <div id='container_middle' className='rounded-md mt-3 flex justify-center items-center h-24 w-[1210px] bg-white'> 
          <div>
          <p id='jumlahthread' className='text-center'>999</p>
          <p id='keteranganthread' className='text-center '>Jumlah Thread</p>
          </div>
          </div>

          <div className='bg-slate-700 w-96 rounded-md flex justify-between items-center h-8 w-[1210px] mt-3 bg-slate-300'
           id='cari_thread'>
            <div className='flex'>
          <img src={Vector1} alt="" className='mr-3'/>
          <input type="search" name="" id="searchbtn"  placeholder='Cari "Thread"' className='bg-transparent w-[1115px]'/>
          </div>
          <img src={Group3} alt="" />
          </div>

          <Table_Thread/>
          <Table_Thread/>
          <Table_Thread/>
          <Table_Thread/>
          <Table_Thread/>
          <Table_Thread/>
        </div>
    </div>
  )
}

export default Manage_Thread_Body