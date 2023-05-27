import React from 'react'
import { Navbar, SideBar, TableThread } from '../../components/organisms'

function ManageThread() {
  return (
    <div id='manage_body' className='bg-gray-100'>
      <Navbar/>
      <SideBar/>
      <TableThread/>
    </div>
  )
}

export default ManageThread