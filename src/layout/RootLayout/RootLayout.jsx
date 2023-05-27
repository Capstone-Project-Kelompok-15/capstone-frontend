import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../../components/organisms'
import { useStore } from '../../config/zustand/store'

function RootLayout() {
    const isExpand = useStore(state => state.isExpand)
    const handleExpand = useStore(state => state.setIsExpand)
    return (
        <div>
            <Navbar />
            <Sidebar expand={isExpand} handleExpand={handleExpand} />

            <Outlet />
        </div>
    )
}

export default RootLayout