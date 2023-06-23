import React from "react"
import { ThreadList } from "../../components/organisms"
import ManageThreadViewModel from "./ManageThread.viewModel"

function ManageThread() {
    const viewModel = ManageThreadViewModel()

    return (
        <div className="bg-[#F8F8F8]">
            <ThreadList
                threadList={viewModel.threadList}
                isExpand={viewModel.isExpand}
            />
        </div>
    )
}

export default ManageThread
