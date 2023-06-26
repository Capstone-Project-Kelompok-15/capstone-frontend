import React from "react"
import { ViewThread } from "../../components/organisms"
import ShowThreadLayoutModel from "../../layout/Threads/Threads.layout.viewModel"

function ManageThread() {
    const viewModel = ShowThreadLayoutModel()

    return (
        <div className="bg-[#F8F8F8]">
            <ViewThread
                threadList={viewModel.threadList}
                isExpand={viewModel.isExpand}
            />
        </div>
    )
}

export default ManageThread
