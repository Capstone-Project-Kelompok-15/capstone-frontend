import React, { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { UserStats } from '../../components/organisms'
import { SearchBar } from '../../components/molecules'
import ManageUserViewModel from './ManageUser.layout.viewModel'

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
        <div>
            <UserStats
                isExpand={viewModel.isExpand}
                heading="Manage User"
                mutedUsersCount={viewModel.mutedUsers}
                usersCount={viewModel.totalUsers}
                blockedUsersCount={viewModel.blockedUsers}
                onlineUsersCount={viewModel.onlineUsers}
            />
            <SearchBar
                heading="Cari &quot;Pengguna&quot;"
                isSearch={viewModel.isSearch}
                handleSearch={viewModel.handleSearch}
                isExpand={viewModel.isExpand}
                formik={viewModel.formik}
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