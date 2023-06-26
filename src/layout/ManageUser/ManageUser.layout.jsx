import React, { useEffect } from "react"
import { useLocation, Outlet } from "react-router-dom"
import { UserStats } from "../../components/organisms"
import { SearchBar } from "../../components/molecules"
import ManageUserViewModel from "./ManageUser.layout.viewModel"

function ManageUser() {
    const viewModel = ManageUserViewModel()
    const location = useLocation()

    useEffect(() => {
        viewModel.getUsers()
    }, [])

    useEffect(() => {
        viewModel.setLocation(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        viewModel.emptySearchResults()
    }, [location.pathname])


    return (
        <div className="bg-[#f8f8f8] min-h-screen">
            <div className="w-full">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div
                            className={`col-end-13 col-span-11 transition-all duration-200 ease-out  ${viewModel.isExpand ? "ml-24" : "-ml-10"
                                }`}>
                            <UserStats
                                isExpand={viewModel.isExpand}
                                heading="Manage User"
                                mutedUsersCount={viewModel.mutedUsers}
                                usersCount={viewModel.totalUsers}
                                blockedUsersCount={viewModel.blockedUsers}
                                onlineUsersCount={viewModel.onlineUsers}
                                pageID="manage-user"
                                time={viewModel.lastUpdatedTime}
                            />
                            <SearchBar
                                heading='Cari "Pengguna"'
                                isSearch={viewModel.isSearch}
                                handleSearch={viewModel.handleOnFocus}
                                isFocused={viewModel.isFocused}
                                formik={viewModel.formik}
                                handleOnFocus={viewModel.handleOnFocus}
                                handleOnBlur={viewModel.handleOnBlur}
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
export default ManageUser
