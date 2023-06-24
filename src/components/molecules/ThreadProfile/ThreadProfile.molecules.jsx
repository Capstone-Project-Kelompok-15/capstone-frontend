import React, {useState} from 'react';
import { DeleteButton, ThreadPicture, ViewButton } from '../../atoms';

function ThreadProfile(
    {
        isExpand,
        threadList,
        deletethread,
      }) {
  const [showModal, setShowModal] = useState(false)

    const handleAcceptClick = (token,id) => {
        setShowModal(false)
        deletethread(token,id)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }


 
  return (
    <div>
      {threadList.map((thread) => (
                <div
                    className={isExpand ? "thread-card mt-4 flex h-16 items-center w-[1065px]" : "thread-card mt-4 flex h-16 items-center w-[1210px]"}
                    key={thread.ID}>
                    <div>
                        <ThreadPicture />
                    </div>
                    <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                        <h6 className="font-source-sans font-bold text-[12px]">
                            {thread.title}
                        </h6>
                        <p className="font-source-sans font-normal text-[12px] ">
                            {thread.content}
                        </p>
                    </div>
                    <div className="flex">
                        <ViewButton />
                        <DeleteButton onClick={handleAcceptClick}/>
                    </div>
                </div>              
            ))}
    </div>
    
  )
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
                className="btn btn-primary text-[#AA1512] font-source-sans font-bold text-24" onClick={handleAcceptClick(token,thread.id)}>
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
  
}


export default ThreadProfile;

