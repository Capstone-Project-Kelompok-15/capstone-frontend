import React from "react"
import { Outlet } from "react-router-dom"
import { SearchBar } from "../../components/molecules"
import { ThreadStats } from "../../components/organisms"

function ThreadLayout() {
    return (
        <div>
            <ThreadStats />
            <SearchBar />
            <Outlet />
        </div>
    )
}

export default ThreadLayout
