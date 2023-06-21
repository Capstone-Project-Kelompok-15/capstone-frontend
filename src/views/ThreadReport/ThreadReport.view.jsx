import React from "react"
import { ThreadReportList } from "../../components/organisms"
import ThreadReportModel from "./ThreadReportModel.view"

function ThreadReport() {
    const viewModel = ThreadReportModel
    return (
        <div>
            <ThreadReportList isExpand={viewModel.isExpand} />
        </div>
    )
}

export default ThreadReport
