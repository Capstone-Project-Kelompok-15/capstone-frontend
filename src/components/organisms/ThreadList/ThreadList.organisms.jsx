import React from "react"
import { DeleteButton, ViewButton } from "../../atoms"

function ThreadList({ isExpand, thread, handleAcceptClick }) {
    return (
        <div>
            <div
                className={
                    isExpand
                        ? "thread-card mt-4 flex h-16 items-center w-[1180px]"
                        : "thread-card mt-4 flex h-16 items-center w-[1210px]"
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
                    <p className="font-source-sans font-normal text-[12px]">
                        {thread.description}
                    </p>
                </div>
                <div className="flex">
                    <ViewButton report={thread} />
                    <DeleteButton
                        handleClick={() => handleAcceptClick(thread.id)}
                    />
                </div>
            </div>

            {/* {showModal && (
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
                                onClick={handleDelete}>
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
            )} */}
        </div>
    )
}

export default ThreadList
