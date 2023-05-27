import React from 'react'
import Trash from '../../../assets/Trash1.svg'

function ReturnButton() {
  return (
    <div>
        <a href="#" className="btn" id='buttonhapus'>
                <img src={Trash} alt="Trash Logo" id='TrashLogo'/>
                <p> Kembalikan <br /> Thread </p>
                </a>
    </div>
  )
}

export default ReturnButton