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
            <UserStats
                isExpand={viewModel.isExpand}
                heading="Manage User"
                mutedUsersCount={viewModel.mutedUsers}
                usersCount={viewModel.totalUsers}
                blockedUsersCount={viewModel.blockedUsers}
                onlineUsersCount={viewModel.onlineUsers}
                pageID="manage-user"
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
                handleDeleteSearchHistory={viewModel.handleDelete}
                handleClickSearchHistory={viewModel.handleClickSearchHistory}
            />

            <Outlet />
        </div>
    )
}
export default ManageUser
