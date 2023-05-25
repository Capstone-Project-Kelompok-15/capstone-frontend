import React from 'react'
import { SearchButton } from '../../atoms'

function SearchBar() {
    return (
        <div className='flex justify-center mt-[16px]'>
            <div className='w-[1210px] h-[36px] rounded-[12px] bg-[#0122691a]'>
                <div className='flex gap-[12px]'>
                    <SearchButton />
                    <div className='w-[1113.62px] mt-[8px] mb-[8px]'>
                        <p className='font-source-sans font-normal text-[#000000CC] text-[14px]'>Cari &quot;Pengguna&quot;</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBar