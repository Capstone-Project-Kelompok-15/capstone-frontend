import React from "react"
import { Outlet } from "react-router-dom"
import { SearchBar } from "../../components/molecules"
import { ThreadReportStats } from "../../components/organisms"

function ReportThreadLayout() {
    return (
        <div>
            <ThreadReportStats />
            <SearchBar />
            <Outlet />
        </div>
    )
}

export default ReportThreadLayout
