import React from "react"
import { ThreadReportList, Modal } from "../../components/organisms"
import ThreadReportModel from "./ThreadReportModel.view"

function ThreadReport() {
    const viewModel = ThreadReportModel()

    return (
        <div>
            {
                viewModel.threadResults.length > 0 ? (
                    viewModel.threadResults.map((thread) => (
                        <ThreadReportList
                            isExpand={viewModel.isExpand}
                            handleAcceptClick={() => viewModel.handleAcceptClick(thread.id)}
                            handleDenyClick={() => viewModel.handleDenyClick(thread.id)}
                            thread={thread}
                            key={thread.id}
                        />
                    ))
                ) : (
                    viewModel.filteredReport.map((thread) => (
                        <ThreadReportList
                            isExpand={viewModel.isExpand}
                            handleAcceptClick={() => viewModel.handleAcceptClick(thread.id)}
                            handleDenyClick={() => viewModel.handleDenyClick(thread.id)}
                            thread={thread}
                            key={thread.id}
                        />

                    ))
                )

            }
            {
                viewModel.isAcceptThreadModal && (
                    <Modal
                        Message="Setujui Laporan"
                        confirmationMessage="Apakah Kamu Yakin Akan Menyetujui Laporan Ini?"
                        proceedMessage="Setuju"
                        cancelMessage="Batal"
                        handleProceed={viewModel.handleAcceptProceed}
                        handleCancel={viewModel.handleAcceptCancel}
                        idProceedButton="setujuilaporan"
                        idCancelButton="batal"
                    />
                )
            }
            {
                viewModel.isDenyThreadModal && (
                    <Modal
                        Message="Tolak Laporan"
                        confirmationMessage="Apakah Kamu Yakin Akan Menolak Laporan Ini?"
                        proceedMessage="Tolak"
                        cancelMessage="Batal"
                        handleProceed={viewModel.handleDenyProceed}
                        handleCancel={viewModel.handleDenyCancel}
                        idProceedButton="tolaklaporan"
                        idCancelButton="batal"
                    />
                )
            }
        </div>
    )
}

export default ThreadReport
