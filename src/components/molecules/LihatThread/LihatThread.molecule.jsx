import React from 'react';
import ThreadPhoto from '../../../assets/Threadphoto.svg'

function LihatThread({isExpand}) {
  return (
    <div className={isExpand ? 'h-[514px] bg-white mt-[20px] px-[15px] py-[30px] w-[1180px]': 'h-[514px] bg-white mt-[20px] px-[15px] py-[30px] w-[1210px]'}>
        <div className='justify-center items-center bg-white'>
          <h1 className='text-center font-source-sans font-bold text-[24px]'>UU Tenaga Kerja</h1>
        </div>
        <div>
          <p className='text-justify text-[16px] font-source-sans font-normal mt-[10px] ml-[30px]'>Saya mau ikut-ikutan menjawab, walaupun sudah telat, masih boleh kan?? Jujur, sampai sekarang saya masih belum tahu apa perbedaan UU Tenaga Kerja yang baru dan yang lama. 
            Tetapi katanya sih, merugikan pekerja karena tidak ada jaminan kerja tetap, upah yang menurun, dan lain-lain yang katanya merugikan lah&hellip;. 
            Saya jujur belum melihat UU yang baru, dan malas juga membuang waktu saya &apos;hanya&apos; untuk melihatnya. Tetapi, ada beberapa hal yang ingin saya sampaikan. 
            Cerita ini, seperti biasa akan panjang, jadi siapkan kuaci atau kacang dan teh yah&hellip;.
            <br />
            <br />
            Kebetulan, saya bukan ahli hukum, bukan ahli ketenaga-kerjaan, bukan investor, bukan pengusaha, bukan siapa-siapa. 
            Saya hanyalah &apos;tukang sapu&apos; yang pernah melanglang-buana ke sana - ke mari, dan pecinta sejarah. 
            Jadi saya tidak bisa membahas teori yang terlalu dalam; saya hanya bisa bercerita dan memaparkan beberapa &apos;fakta sejarah&apos;.
            
            </p>
        </div>
        <div className='flex justify-center'>
          <img src={ThreadPhoto} alt="" className='mt-[10px]'/>
        </div>

    </div>
  )
}

export default LihatThread;