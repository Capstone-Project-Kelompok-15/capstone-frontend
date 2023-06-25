import React from "react"
import { ThreadReportCard } from "../../molecules"

function ThreadReportList({
    isExpand,
    filteredReport,
    getReport,
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
            <div className={isExpand ? "gap-[15px] ml-[300px]" : "ml-[150px]"}>
                <ThreadReportCard
                    isExpand={isExpand}
                    filteredReport={filteredReport}
                    getReport={getReport}
                    handleAcceptClick={handleAcceptClick}
                    handleDenyClick={handleDenyClick}
                    showModal={showModal}
                    modalTitle={modalTitle}
                    modalContent={modalContent}
                    handleModalClose={handleModalClose}
                    handleUpdate={handleUpdate}
                />
            </div>
        </div>
    )
}

export default ThreadReportList
