import React from "react"
import { Outlet } from "react-router-dom"
import { SearchBar } from "../../components/molecules"
import { ThreadStats } from "../../components/organisms"
import ThreadLayoutModel from "./Threads.layout.viewModel"


function ThreadLayout() {
    const viewModel = ThreadLayoutModel ()
    
    return (
        <div className="bg-[#F8F8F8]">
            <ThreadStats
            isExpand={viewModel.isExpand} />
            <SearchBar
            isExpand={viewModel.isExpand} />
            <Outlet />
        </div>
    )
}

export default ThreadLayout
