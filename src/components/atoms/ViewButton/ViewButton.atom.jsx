import React from 'react'
import Eye from '../../../assets/Eye.svg'

function ViewButton() {
  return (
    <div>
    <a href="#" className="btn" id='buttonlihat'>
    <img src={Eye} alt="Eye Logo" id='EyeLogo'/>
     <p> Lihat <br /> Thread </p>
    </a>
    </div>
  )
}

export default ViewButton