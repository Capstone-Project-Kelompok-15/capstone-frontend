import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserStats } from '../../components/organisms'
import { SearchBar } from '../../components/molecules'

function ManageUser() {
    return (
        <div>
            <UserStats />
            <SearchBar />

            <Outlet />
        </div>
    )
}

export default ManageUser