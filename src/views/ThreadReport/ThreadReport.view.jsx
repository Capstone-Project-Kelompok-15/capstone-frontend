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
            />
        </div>
    )
}

export default ThreadReport
