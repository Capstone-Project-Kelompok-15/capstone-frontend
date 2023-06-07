import React from 'react'
import Trash from '../../../assets/Trash1.svg'

function ReturnButton() {
  return (
    <div>
      <button id='buttonreturn' className='btn' type='button'>
      <img src={Trash} alt="Trash Logo" id='TrashLogo'/> 
           <p> Kembalikan <br /> Thread </p>
       </button>
    </div>
  )
}

export default ReturnButton