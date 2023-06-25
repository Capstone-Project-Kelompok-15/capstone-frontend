import React, { useEffect, useState } from "react"
import {
    DeleteButton,
    ViewButton,
} from "../../atoms"
import { useStore } from "../../../config/zustand/store"

function ThreadProfile({
    isExpand,
    getReport,
}) {
    const {deletethread, report}= useStore(state => state)

    const [showModal, setShowModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState("")
    const [idDelete, setIdDelete] = useState(0)

    useEffect(() => {
        getReport()
    }, [])

    const handleAcceptClick = (id) => {
        setShowModal(true)
        setIdDelete(id)
        setModalTitle("Hapus Thread?")
        setModalContent("Apakah Kamu Yakin Akan Menghapus Thread Ini?")
    }

    const handleDelete = () => {
        deletethread(idDelete)
        setShowModal(false)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <div>
            {report.map((thread) => (
                <div
                    className={isExpand ? "thread-card mt-4 flex h-16 items-center w-[1180px]": "thread-card mt-4 flex h-16 items-center w-[1210px]"}
                    key={thread.id}>
                    <div>
                        <img src={thread.thread_picture} alt="thread picture" className="h-[50px] w-[50px] rounded-[100px]"/>
                    </div>
                    <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                        <h6 className="font-source-sans font-bold text-[12px]">
                            {thread.title}
                        </h6>
                        <p className="font-source-sans font-normal text-[12px]">
                            {thread.description}
                        </p>
                    </div>
                    <div className="flex">
                        <ViewButton report={thread}/>
                        <DeleteButton onClick={() => handleAcceptClick (thread.id)} />
                    </div>
                </div>
            ))}

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <div className="modal bg-white rounded-xl p-8">
                        <h2 className="font-source-sans font-bold text-24 mb-4 text-center">
                            {modalTitle}
                        </h2>
                        <p className="font-source-sans text-20 text-[#808080] mb-8 text-center">
                            {modalContent}
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <button
                                type="button"
                                id="confirmmodalbutton"
                                className="btn btn-primary text-[#AA1512] font-source-sans font-bold text-24"
                                onClick={handleDelete}
                                >
                                Hapus
                            </button>
                            <button
                                type="button"
                                id="cancelmodalbutton"
                                className="btn font-source-sans font-bold text-24"
                                onClick={handleModalClose}>
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ThreadProfile

