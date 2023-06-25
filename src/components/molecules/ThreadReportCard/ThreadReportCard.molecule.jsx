import React from "react"
import { AcceptButton, DenyButton, ViewButton } from "../../atoms"

function ThreadReportCard({
    isExpand,
    filteredReport,

    handleAcceptClick,
    handleDenyClick,
    showModal,
    modalTitle,
    modalContent,
    handleModalClose,
    handleUpdate,
}) {
    return (
        <div>
            {filteredReport.map((thread) => (
                <div
                    className={
                        isExpand
                            ? "thread-card mt-3 ml-3 flex h-16 items-center w-[1180px]"
                            : "thread-card mt-3 ml-3 flex h-16 items-center w-[1210px]"
                    }
                    key={thread.id}>
                    <div>
                        <img
                            src={thread.thread_picture}
                            alt="thread picture"
                            className="h-[50px] w-[50px] rounded-[100px]"
                        />
                    </div>
                    <div className="font-source-sans font-bold text-[12px] mx-3.5 flex-1">
                        <h6 className="font-source-sans font-bold text-[12px]">
                            {thread.title}
                        </h6>
                        <p className="font-source-sans font-bold text-[12px] text-[#AA1512]">
                            {thread.tag}
                        </p>
                    </div>
                    <div className="flex">
                        <ViewButton report={thread} />
                        <AcceptButton
                            onClick={() => handleAcceptClick(thread)}
                        />
                        <DenyButton onClick={() => handleDenyClick(thread)} />
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
                                onClick={handleUpdate}
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
