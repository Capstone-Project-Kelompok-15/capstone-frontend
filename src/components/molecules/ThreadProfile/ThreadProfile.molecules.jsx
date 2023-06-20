import React, {useState} from 'react';
import { DeleteButton, ThreadPicture, ViewButton } from '../../atoms';
import threads from '../../../dummyData/ThreadList';

function ThreadProfile() {
  const [showModal, setShowModal] = useState(false)

    const handleAcceptClick = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }
 
  return (
    <div>
      {threads.map(thread => (
        <div className='flex justify-between mt-4' key={thread.id}>
          <div className='flex'>
            <ThreadPicture />
            <div className='mt-[10px] ml-[15px]'>
              <h1 className='font-source-sans font-bold text-[12px]'>{thread.name}</h1>
              <p className='font-source-sans font-normal text-[12px]'>{thread.desc}</p>

            </div>
          </div>
          <div className='flex'>
            <ViewButton />
            <DeleteButton onClick={handleAcceptClick}/>
          </div>
        </div>
      ))}

       {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <div className="modal bg-white rounded-xl p-8">
                        <h2 className="font-source-sans font-bold text-24 mb-4 text-center">
                            Hapus Thread?
                        </h2>
                        <p className="font-source-sans text-20 text-[#808080] mb-8 text-center">
                            Apakah Kamu Yakin Akan Menghapus Thread Ini?
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <button id='buttonhapus' type='button'
                            className="btn btn-primary text-[#AA1512] font-source-sans font-bold text-24" onClick={handleModalClose}>
                                Hapus
                            </button>
                            <button
                                className="btn font-source-sans font-bold text-24" id='buttonbatal'
                                type='button'
                                onClick={handleModalClose}>
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}

    </div>
  );
}

export default ThreadProfile;

