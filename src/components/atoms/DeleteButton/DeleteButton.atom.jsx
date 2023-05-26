import React from 'react'
import Trash from '../../../assets/Trash1.svg'

function DeleteButton() {
  return (
    <div>
      <a href="#" className="btn" id='buttonhapus'>
                <img src={Trash} alt="Trash Logo" id='TrashLogo'/>
                <p> Hapus <br /> Thread </p>
                </a>
    </div>
  )
}

export default DeleteButton