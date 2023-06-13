import React from 'react';
import ThreadPhoto from '../../../assets/Threadphoto.svg'

function LihatThread() {
  return (
    <div className='h-[514px] w-[1210px] bg-white mt-[144px] px-[15px] py-[30px]'>
        <div className='justify-center items-center'>
          <h1 className='text-center font-source-sans font-bold'>UU Tenaga Kerja</h1>
        </div>
        <div>
          <p>Saya mau ikut-ikutan menjawab, walaupun sudah telat, masih boleh kan?? Jujur, sampai sekarang saya masih belum tahu apa perbedaan UU Tenaga Kerja yang baru dan yang lama. 
            Tetapi katanya sih, merugikan pekerja karena tidak ada jaminan kerja tetap, upah yang menurun, dan lain-lain yang katanya merugikan lah&hellip;. 
            Saya jujur belum melihat UU yang baru, dan malas juga membuang waktu saya &apos;hanya&apos; untuk melihatnya. Tetapi, ada beberapa hal yang ingin saya sampaikan. 
            Cerita ini, seperti biasa akan panjang, jadi siapkan kuaci atau kacang dan teh yah&hellip;.
            Kebetulan, saya bukan ahli hukum, bukan ahli ketenaga-kerjaan, bukan investor, bukan pengusaha, bukan siapa-siapa. 
            Saya hanyalah &apos;tukang sapu&apos; yang pernah melanglang-buana ke sana - ke mari, dan pecinta sejarah. 
            Jadi saya tidak bisa membahas teori yang terlalu dalam; saya hanya bisa bercerita dan memaparkan beberapa &apos;fakta sejarah&apos;.
            </p>
        </div>
        <div className='flex justify-center'>
          <img src={ThreadPhoto} alt=""/>
        </div>
    </div>
  )
}

export default LihatThread;