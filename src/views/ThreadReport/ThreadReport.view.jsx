import React from "react"
import { ThreadReportList } from "../../components/organisms"
import ThreadReportModel from "./ThreadReportModel.view"

function ThreadReport() {
    const viewModel = ThreadReportModel()

    return (
        <div>
            <ThreadReportList
                isExpand={viewModel.isExpand}
                getReport={viewModel.getReport}
                handleAcceptClick={viewModel.handleAcceptClick}
                handleDenyClick={viewModel.handleDenyClick}
                showModal={viewModel.showModal}
                modalTitle={viewModel.modalTitle}
                modalContent={viewModel.modalContent}
                handleModalClose={viewModel.handleModalClose}
                handleUpdate={viewModel.handleUpdate}
                filteredReport={viewModel.filteredReport}
            />
        </div>
    )
}

export default ThreadReport
