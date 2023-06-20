import React from "react"
import Trash from "../../../assets/Trash1.svg"

function DeleteButton() {
  return (
    <div>
      <button id='buttonhapus' className='btn' type='button'>
        <img src={Trash} alt="Trash Logo" id='TrashLogo' />
      </button>
      <p> Hapus <br /> Thread </p>
    </div>
  )
}

export default DeleteButton
