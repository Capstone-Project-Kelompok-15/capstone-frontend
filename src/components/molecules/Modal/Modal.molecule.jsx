import React from 'react'

function Modal({ Message, Info, Accept, Cancel }) {
    const acceptCondition = {
        "Hapus": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Menolak": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Kembalikan": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Buka Blokir": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Buka Mute": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Keluar": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Setuju": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
        "Blokir": 'font-source-sans font-bold text-[24px] text=[#AA1512]',
    };

    return (
        <div className='w-[469px] h-[244px]'>
            <div className='w-[265px] h-[184px] mt-[30px] mb-[30px] ml-[102px] mr-[102px] text-center'>
                <h1>{Message}</h1>
                <p>{Info}</p>
                <button type='button'>
                    <p className={acceptCondition[Accept]}>{Accept}</p>
                </button>
                <button type='button'>
                    <p>{Cancel}</p>
                </button>
            </div>
        </div>
    )
}

export default Modal