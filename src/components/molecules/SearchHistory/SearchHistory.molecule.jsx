import React from 'react'
import history from '../../../assets/history.svg'

function SearchHistory({ searchHistory, handleClick }) {
    return (
        <div className='flex gap-[12px] mt-[9px] ml-[16px] mb-[9px]'>
            <img src={history} alt='history' />
            <button type='button' onClick={handleClick}>
                <p className='font-normal pl-[10px]'>
                    {searchHistory}
                </p>
            </button>
        </div>
    )
}

export default SearchHistory