import React from 'react'
import { DeleteSearchHistoryButton, SearchButton } from '../../atoms'

function SearchBar({ heading, isSearch, handleSearch }) {
    return (
        <div className='flex justify-center mt-[16px]'>
            {
                isSearch ? (
                    <div className='w-[1210px] h-[72px] rounded-[12px] bg-[#FFFFFF] border border-[#012269]'>
                        <div className='flex gap-[12px]'>
                            <SearchButton handleSearch={handleSearch} />
                            <form className='mt-[9px] mb-[9px]'>
                                <input type='text' className='focus:outline-none' />
                            </form>
                            <DeleteSearchHistoryButton />
                        </div>
                        <div className='flex justify-center'>
                            <hr className='w-[1170px]' />

                        </div>
                    </div>
                ) : (
                    <div className='w-[1210px] h-[36px] rounded-[12px] bg-[#0122691a]'>
                        <div className='flex gap-[12px]'>
                            <SearchButton handleSearch={handleSearch} />
                            <div className='w-[1113.62px] mt-[8px] mb-[8px]'>
                                <p className='font-source-sans font-normal text-[#000000CC] text-[14px]'>{heading}</p>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default SearchBar