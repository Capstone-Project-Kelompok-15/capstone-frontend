import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserStats } from '../../components/organisms'
import { SearchBar } from '../../components/molecules'
import ManageUserViewModel from './ManageUser.layout.viewModel'

function ManageUser() {
    const viewModel = ManageUserViewModel()

    console.log(viewModel.searchState);

    return (
        <div>
            <UserStats />
            <SearchBar
                heading="Cari &quot;Pengguna&quot;"
                isSearch={viewModel.searchState}
                handleSearch={viewModel.handleSearch}
            />

            <Outlet />
        </div>
    )
}

export default ManageUser