import React from 'react'
import search from '../../../assets/search.svg'

function SearchButton({ handleSearch }) {
    return (
        <button
            type="button"
            className="mt-[9px] mb-[9px] ml-[16px]"
            onClick={handleSearch}>
            <img src={search} alt="search" />
        </button>
    )
}
export default SearchButton
