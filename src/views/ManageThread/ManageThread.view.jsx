import React from "react"
import { Modal, ThreadList } from "../../components/organisms"
import ManageThreadViewModel from "./ManageThread.viewModel"

function ManageThread() {
    const viewModel = ManageThreadViewModel()
    return (
        <div>
            {viewModel.threadResults.length > 0
                ? viewModel.threadResults.map((thread) => (
                    <ThreadList
                        key={thread.id}
                        isExpand={viewModel.isExpand}
                        thread={thread}
                        handleAcceptClick={() =>
                            viewModel.handleAcceptClick(thread.id)
                        }
                    />
                ))
                : viewModel.report.map((thread) => (
                    <ThreadList
                        key={thread.id}
                        isExpand={viewModel.isExpand}
                        thread={thread}
                        handleAcceptClick={() =>
                            viewModel.handleAcceptClick(thread.id)
                        }
                    />
                ))}
            {viewModel.isDeleteThread && (
                <Modal
                    Message="Hapus Thread?"
                    confirmationMessage="Apakah Kamu Yakin Akan Menghapus Thread Ini?"
                    proceedMessage="Hapus"
                    cancelMessage="Batal"
                    handleProceed={viewModel.handleDelete}
                    handleCancel={viewModel.handleDeleteCancel}
                    idProceedButton="hapusthread"
                    idCancelButton="batal"
                />
            )}
        </div>
    )
}

export default ManageThread
