import React, { useState } from "react"
import {
    AcceptButton,
    DenyButton,
    ViewButton,
    ThreadPicture,
} from "../../atoms"
import threads from "../../../dummyData/ThreadList"

function ThreadReportCard({ isExpand }) {
    const [showModal, setShowModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState("")

    const handleAcceptClick = () => {
        setShowModal(true)
        setModalTitle("Setujui Laporan?")
        setModalContent("Apakah Kamu Yakin Akan Menyetujui Laporan Ini?")
    }

    const handleDenyClick = () => {
        setShowModal(true)
        setModalTitle("Tolak Laporan?")
        setModalContent("Apakah Kamu Yakin Akan Menolak Laporan Ini?")
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <div>
            {threads.map((thread) => (
                <div
                    className={
                        isExpand
                            ? "thread-card mt-3 ml-3 flex h-16 items-center w-[1060px]"
                            : "thread-card mt-3 ml-3 flex h-16 items-center w-[1210px]"
                    }
                    key={thread.id}>
                    <div>
                        <ThreadPicture />
                    </div>
                    <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                        <h6 className="font-source-sans font-bold text-[12px]">
                            {thread.name}
                        </h6>
                        <p className="font-source-sans font-bold text-[12px] text-[#AA1512]">
                            #kekerasan
                        </p>
                    </div>
                    <div className="flex">
                        <ViewButton />
                        <AcceptButton onClick={handleAcceptClick} />
                        <DenyButton onClick={handleDenyClick} />
                    </div>
                </div>
            ))}

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <div className="modal bg-white rounded-xl p-8 w-[469px] h-[244px]">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            {modalTitle}
                        </h2>
                        <p className="text-lg text-[#808080] mb-4 text-center">
                            {modalContent}
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <button
                                type="button"
                                id="confirmmodalbutton"
                                className="btn btn-primary text-2xl font-bold text-[#AA1512] ">
                                {modalTitle === "Setujui Laporan?"
                                    ? "Setuju"
                                    : "Menolak"}
                            </button>
                            <button
                                type="button"
                                id="cancelmodalbutton"
                                className="btn text-2xl font-bold "
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

export default ThreadReportCard
