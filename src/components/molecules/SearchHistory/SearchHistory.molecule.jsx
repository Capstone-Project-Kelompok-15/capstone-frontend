import React from 'react'
import history from '../../../assets/history.svg'

function SearchHistory({ searchHistory }) {
    return (
        <div className='flex gap-[12px] mt-[9px] ml-[16px] mb-[9px]'>
            <img src={history} alt='history' />
            <p className='font-normal'>
                {searchHistory}
            </p>
        </div>
    )
}

export default SearchHistory