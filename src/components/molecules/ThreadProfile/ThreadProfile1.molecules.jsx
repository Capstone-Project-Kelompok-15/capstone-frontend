import React from 'react'
import { ReturnButton, ThreadPicture, ViewButton } from '../../atoms'

function ThreadProfile1() {
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
      <ReturnButton/>
      </div>
      </div>
  )
}

export default ThreadProfile