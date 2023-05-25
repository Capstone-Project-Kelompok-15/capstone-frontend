import React from 'react'

function CardStats({ statsNumber, statsTitle }) {
    return (
        <div className='w-[280px] h-[93px] bg-[#FFFFFF] drop-shadow-xl rounded-[10px]'>
            <div className='w-[260px] h-[73px] p-[10px] mt-[10px]'>
                <p className='font-source-sans font-normal text-[16px] text-center'>{statsNumber}</p>
                <p className='font-source-sans font-normal text-[16px] text-center'>{statsTitle}</p>
            </div>
        </div>
    )
}

export default CardStats