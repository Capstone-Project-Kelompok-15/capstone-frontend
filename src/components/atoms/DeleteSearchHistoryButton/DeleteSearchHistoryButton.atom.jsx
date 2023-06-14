import React from 'react'
import x from '../../../assets/x-cross.svg'

function DeleteSearchHistoryButton({ handleDeleteSearchHistory }) {
    return (
        <button
            type='button'
            className='mr-[16px] ml-[930px]'
            onClick={handleDeleteSearchHistory}>
            <img src={x} alt='delete history' />
        </button>
    )
}

export default DeleteSearchHistoryButton