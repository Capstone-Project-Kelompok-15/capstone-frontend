import React from 'react'
import { DeleteButton, ThreadPicture, ViewButton } from '../../atoms'

function ThreadProfile() {
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex'>
      <ThreadPicture/>
      <div>
        <h1>10 Universitas Terbaik Di Indonesia</h1>
        <p>Lorem Ipsum</p>
        </div>
        </div>
    <div className='flex'>
      <ViewButton/>
      <DeleteButton/>
      </div>
      </div>
  )
}

export default ThreadProfile