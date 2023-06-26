import React, { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SearchBar } from "../../components/molecules"
import { ThreadStats } from "../../components/organisms"
import ThreadLayoutModel from "./Threads.layout.viewModel"

function ThreadLayout() {
    const viewModel = ThreadLayoutModel()
    const location = useLocation()

    useEffect(() => {
        viewModel.setLocation(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        viewModel.emptySearchResults()
    }, [location.pathname])

    return (
        <div className="bg-[#F8F8F8]">
            <div className="w-full">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div
                            className={`col-end-13 col-span-11 transition-all duration-200 ease-out  ${
                                viewModel.isExpand ? "ml-24" : "-ml-10"
                            }`}>
                            <ThreadStats isExpand={viewModel.isExpand} />
                            <SearchBar
                                heading='Cari "Thread"'
                                isSearch={viewModel.isSearch}
                                handleSearch={viewModel.handleSearch}
                                isExpand={viewModel.isExpand}
                                formik={viewModel.formik}
                                handleKeyPress={viewModel.handleKeyPress}
                                searchHistories={viewModel.searchHistory}
                                handleDeleteSearchHistory={
                                    viewModel.handleDelete
                                }
                                handleClickSearchHistory={
                                    viewModel.handleClickSearchHistory
                                }
                            />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadLayout
