import React from 'react'
import Eye from '../../../assets/Eye.svg'

function ViewButton() {
  return (
    <div>
      <button id='buttonlihat' className='btn' type='button'>
      <img src={Eye} alt="Eye Logo" id='EyeLogo'/>
      </button>
   
     <p> Lihat <br /> Thread </p>
    </div>
  )
}

export default ViewButton