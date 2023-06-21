import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar, Sidebar } from "../../components/organisms"
import { useStore } from "../../config/zustand/store"

function RootLayout() {
    const isExpand = useStore((state) => state.isExpand)
    const handleExpand = useStore((state) => state.setIsExpand)
    const location = useLocation()


    const excludedPaths = ["/login", "/landing", "/ubahprofil"]
    const isExcluded = excludedPaths.includes(location.pathname)

    return (
        <div>
            {!isExcluded && (
                <>

                    <Navbar bgNavbar="bgIsLoggedIn" />

                    <Sidebar expand={isExpand} handleExpand={handleExpand} />
                </>
            )}
            <Outlet />
        </div>
    )
}

export default RootLayout
