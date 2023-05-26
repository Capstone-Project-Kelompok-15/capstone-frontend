import React from 'react'
import { Navbar, TableThread } from '../../organisms/index'

function ManageThread() {
  return (
    <div id='manage_body' className='bg-gray-100 '>
      <Navbar/>
      <TableThread/>
    </div>
  )
}

export default ManageThread