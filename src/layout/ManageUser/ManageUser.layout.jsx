import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserStats } from '../../components/organisms'
import { SearchBar } from '../../components/molecules'
import ManageUserViewModel from './ManageUser.layout.viewModel'

function ManageUser() {
    const viewModel = ManageUserViewModel()

    return (
        <div className='bg-[#f8f8f8]'>
            <UserStats
                isExpand={viewModel.isExpand}
                heading="Manage User"
                // mutedUsersCount={viewModel.mutedUsers}
                // usersCount={viewModel.totalUsers}
                // blockedUsersCount={viewModel.blockedUsers}
                onlineUsersCount={viewModel.totalUsers} />
            <SearchBar
                heading="Cari &quot;Pengguna&quot;"
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
export default ManageUser