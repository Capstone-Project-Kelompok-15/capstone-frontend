import React from 'react'
import x from '../../../assets/x-cross.svg'

function DeleteSearchHistoryButton() {
    return (
        <button type='button' className='mr-[16px]'>
            <img src={x} alt='delete history' />
        </button>
    )
}

export default DeleteSearchHistoryButton