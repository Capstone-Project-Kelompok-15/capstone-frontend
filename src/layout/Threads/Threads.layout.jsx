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
            heading="Cari &quot;Thread&quot;"
            isSearch={viewModel.isSearch}
            handleSearch={viewModel.handleSearch}
            isExpand={viewModel.isExpand}
            formik={viewModel.formik}
            handleKeyPress={viewModel.handleKeyPress}
            searchHistories={viewModel.searchHistory}
            handleDeleteSearchHistory={viewModel.handleDelete}
             />
            <Outlet />
        </div>
    )
}

export default ThreadLayout
