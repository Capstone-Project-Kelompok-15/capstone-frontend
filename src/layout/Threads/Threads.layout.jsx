import React from 'react'
import { Outlet } from 'react-router-dom'
import { SearchBar } from '../../components/molecules'

function ThreadLayout() {
    return (
        <div>
            <SearchBar />

            <Outlet />
        </div>
    )
}

export default ThreadLayout